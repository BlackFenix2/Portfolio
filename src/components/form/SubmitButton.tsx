import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { FormContext, FormProps } from './formContext';

interface Props {
  name?: string;
  className?: string;
  loading?: boolean;
  forceEnable?: boolean;
}

class SubmitButton extends React.Component<Props> {
  state;

  render() {
    const { name, children, className, loading, forceEnable } = this.props;
    return (
      <FormContext.Consumer>
        {(context: FormProps) => (
          <Button
            type="submit"
            disabled={(context.submitting || context.pristine) && !forceEnable}
            className={className}
            loading={loading}
          >
            {children || name || 'Submit'}
          </Button>
        )}
      </FormContext.Consumer>
    );
  }
}
export default SubmitButton;
