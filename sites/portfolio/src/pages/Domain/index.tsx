import React from 'react';
import { domainAPI } from 'src/services/API';
import Debug from 'src/components/Views/Domain/Debug';
import DnsInfo from 'src/components/Views/Domain/DnsInfo';
import DomainCard from 'src/components/Views/Domain/DomainCard';
import { IDomainRecord } from 'src/components/Views/Domain/domainRecords';
import InputForm from 'src/components/Views/Domain/InputForm';
import Legal from 'src/components/Views/Domain/Legal';
import SummaryInfo from 'src/components/Views/Domain/SummaryInfo';
import WhoisInfo from 'src/components/Views/Domain/WhoisInfo';
import { Grid, Card, CardContent, Box, CardHeader } from '@material-ui/core';

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

  handleSubmit = () => {
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
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <InputForm
              handleSubmit={this.handleSubmit}
              domain={this.state.domain}
              change={this.change}
              loading={loading}
            />
          </Grid>
          <Grid item xs={3}>
            <Card raised>
              <CardHeader title="Domain Name" />
              <CardContent>
                <p>{whois.domain}</p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <DomainCard name="WHOIS" loading={loading}>
              <WhoisInfo {...whois} />
            </DomainCard>
          </Grid>
          <Grid item xs>
            <DomainCard name="DNS" loading={loading}>
              <DnsInfo {...dns} />
            </DomainCard>
          </Grid>
          <Grid item xs>
            <DomainCard name="Summary" loading={loading}>
              <SummaryInfo {...summary} />
            </DomainCard>
          </Grid>
          <Grid item xs>
            <DomainCard name="Debug" loading={loading}>
              <Debug
                loading={loading}
                error={error}
                errorMessage={errorMessage}
              />
            </DomainCard>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <DomainCard name="Raw WHOIS" loading={loading}>
              {whois.raw
                .replace('\r', '')
                .split('\n')
                .map((i, k) => (
                  <p key={k}>{i}</p>
                ))}
            </DomainCard>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <Legal />
          </Grid>
        </Grid>
      </Box>
    );
  }
}
