import * as React from 'react';
import { Card, Grid, Segment } from 'semantic-ui-react';
import { domainAPI } from 'src/services/API';
import Debug from 'src/components/Views/Domain/Debug';
import DnsInfo from 'src/components/Views/Domain/DnsInfo';
import DomainCard from 'src/components/Views/Domain/DomainCard';
import { IDomainRecord } from 'src/components/Views/Domain/domainRecords';
import InputForm from 'src/components/Views/Domain/InputForm';
import Legal from 'src/components/Views/Domain/Legal';
import SummaryInfo from 'src/components/Views/Domain/SummaryInfo';
import WhoisInfo from 'src/components/Views/Domain/WhoisInfo';

interface State {
  response: IDomainRecord;
  domain: string;
  loading: boolean;
  error: boolean;
  errorMessage: string;
}

const initialState: State = {
  response: {
    whois: {
      domain: '',
      created: '',
      expired: '',
      nameservers: [''],
      domainStatus: [''],
      admin: {
        email: ''
      },
      registrant: {
        email: ''
      },
      raw: ''
    },
    dns: {
      mxRecords: [''],
      aRecords: [''],
      cnameRecords: ['']
    },
    summary: {
      domainLocked: undefined,
      emailHost: undefined,
      domainOwner: undefined
    }
  },
  domain: '',
  loading: false,
  error: false,
  errorMessage: ''
};

export default class Domain extends React.Component<{}, State> {
  recaptchaInstance: any;

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  getDomain = async domain => {
    // set the loading state

    this.setState({
      loading: true
    });

    try {
      // make the API Calls

      const response = await domainAPI.getDomainWHOIS(domain);

      // output the API Response
      this.setState({
        response,
        loading: false
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: true,
        errorMessage: error.message
      });
    }
  };

  change = event => {
    this.setState({
      domain: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.reset();
    this.getDomain(this.state.domain);
  };

  reset = () => {
    this.setState(initialState);
  };

  render() {
    const { error, errorMessage, loading } = this.state;
    const { whois, dns, summary } = this.state.response;
    return (
      <Grid stackable>
        <Grid.Row columns={4}>
          <Grid.Column>
            <InputForm
              handleSubmit={this.handleSubmit}
              domain={this.state.domain}
              change={this.change}
              loading={loading}
            />
          </Grid.Column>
          <Grid.Column>
            <Card raised fluid>
              <Card.Content>
                <h2>Domain Name</h2>
                <p>{whois.domain}</p>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={4}>
          <Grid.Column>
            <DomainCard name="WHOIS" loading={loading}>
              <WhoisInfo {...whois} />
            </DomainCard>
          </Grid.Column>
          <Grid.Column>
            <DomainCard name="DNS" loading={loading}>
              <DnsInfo {...dns} />
            </DomainCard>
          </Grid.Column>
          <Grid.Column>
            <DomainCard name="Summary" loading={loading}>
              <SummaryInfo {...summary} />
            </DomainCard>
          </Grid.Column>
          <Grid.Column>
            <DomainCard name="Debug" loading={loading}>
              <Debug
                loading={loading}
                error={error}
                errorMessage={errorMessage}
              />
            </DomainCard>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <DomainCard name="Raw WHOIS" loading={loading}>
              <Segment basic>
                <p>
                  {whois.raw
                    .replace('\r', '')
                    .split('\n')
                    .map((i, k) => (
                      <p key={k}>{i}</p>
                    ))}
                </p>
              </Segment>
            </DomainCard>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Legal />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
