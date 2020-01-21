export interface IWhoisRecord {
  domain: string;
  created: string;
  expired: string;
  nameservers: string[];
  domainStatus: string[];
  admin: {
    email: string;
  };
  registrant: {
    email: string;
  };
  raw: string;
}

export interface IDnsRecord {
  mxRecords: string[];
  aRecords: string[];
  cnameRecords: string[];
}

export interface IDomainRecord {
  whois: IWhoisRecord;
  dns: IDnsRecord;
  summary: IDomainSummary;
}

export interface IDomainSummary {
  domainLocked: boolean;
  emailHost: string;
  domainOwner: string;
}
