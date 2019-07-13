import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { FormContext } from './formContext';

interface IProps {
  name?: string;
  className?: string;
  loading?: boolean;
}

class ResetButton extends React.Component<IProps> {
  state;

  render() {
    const { name, children, className, loading } = this.props;
    return (
      <FormContext.Consumer>
        {(context: any) => (
          <Button
            type="reset"
            disabled={context.submitting || context.pristine}
            className={className}
            loading={loading}
          >
            {children || name || 'Reset'}
          </Button>
        )}
      </FormContext.Consumer>
    );
  }
}
export default ResetButton;
