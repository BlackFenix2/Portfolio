import * as React from 'react';
import * as Grid from '../../components/elements/Grid';
import { domainAPI } from '../../services/API';
import Debug from './Debug';
import DnsInfo from './DnsInfo';
import DomainCard from './DomainCard';
import { IDomainRecord } from './domainRecords';
import InputForm from './InputForm';
import Legal from './Legal';
import SummaryInfo from './SummaryInfo';
import WhoisInfo from './WhoisInfo';
interface IState {
  response: IDomainRecord;
  domain: string;
  loading: boolean;
  error: boolean;
  errorMessage: string;
}

export default class Domain extends React.Component<{}, IState> {
  public recaptchaInstance: any;
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  public getDomain = async domain => {
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

  public change = event => {
    this.setState({
      domain: event.target.value
    });
  };

  public handleSubmit = event => {
    event.preventDefault();
    this.reset();
    this.getDomain(this.state.domain);
  };

  public reset = () => {
    this.setState(initialState);
  };

  public render() {
    const { error, errorMessage, loading } = this.state;
    const { whois, dns, summary } = this.state.response;
    return (
      <Grid.Body>
        <Grid.RowPadding>
          <Grid.Col quarter>
            <InputForm
              handleSubmit={this.handleSubmit}
              domain={this.state.domain}
              change={this.change}
              loading={loading}
            />
          </Grid.Col>
          <Grid.Col quarter>
            <div className="w3-card-4 w3-container">
              <h2>Domain Name</h2>
              <p>{whois.domain}</p>
            </div>
          </Grid.Col>
        </Grid.RowPadding>
        <Grid.RowPadding>
          <Grid.Col third>
            <DomainCard name="WHOIS" loading={loading}>
              <WhoisInfo {...whois} />
            </DomainCard>
          </Grid.Col>
          <Grid.Col third>
            <DomainCard name="DNS" loading={loading}>
              <DnsInfo {...dns} />
            </DomainCard>
          </Grid.Col>
          <Grid.Col third>
            <DomainCard name="Summary" loading={loading}>
              <SummaryInfo {...summary} />
            </DomainCard>
          </Grid.Col>
          <Grid.Col third>
            <DomainCard name="Debug" loading={loading}>
              <Debug
                loading={loading}
                error={error}
                errorMessage={errorMessage}
              />
            </DomainCard>
          </Grid.Col>
        </Grid.RowPadding>

        <DomainCard name="Raw WHOIS" loading={loading}>
          <div className="w3-panel">
            <p>
              {whois.raw
                .replace('\r', '')
                .split('\n')
                .map((i, k) => {
                  return <p key={k}>{i}</p>;
                })}
            </p>
          </div>
        </DomainCard>

        <Legal />
      </Grid.Body>
    );
  }
}

const initialState: IState = {
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
