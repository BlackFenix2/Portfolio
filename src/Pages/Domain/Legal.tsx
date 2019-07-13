import * as React from 'react';
import { Card } from 'semantic-ui-react';

const Legal: React.SFC = () => (
  <Card raised fluid>
    <Card.Content>
      <h3>NOTICE, DISCLAIMERS AND TERMS OF USE:</h3>
    </Card.Content>
    <Card.Content>
      <p>
        By submitting an inquiry,you agree to these terms of usage and
        limitations of warranty. In particular,you agree not to use this data to
        allow, enable, or otherwise make possible ,dissemination or collection
        of this data, in part or in its entirety, for any purpose, such as the
        transmission of unsolicited advertising and solicitations of any kind,
        including spam. You further agree not to use this data to enable high
        volume, automated or robotic electronic processes designed to collect or
        compile this data for any purpose, including mining this data for your
        own personal or commercial purposes.
      </p>
    </Card.Content>
  </Card>
);

export default Legal;
