import * as React from 'react';
import { FormContext } from './FormContext';

interface IProps {
  name?: string;
  className?: string;
}

class ResetButton extends React.Component<IProps> {
  public state;
  public render() {
    const { name, children, className } = this.props;
    return (
      <FormContext.Consumer>
        {(context: any) => (
          <button
            type="reset"
            disabled={context.submitting || context.pristine}
            className={className}
          >
            {children || name || 'Reset'}
          </button>
        )}
      </FormContext.Consumer>
    );
  }
}
export default ResetButton;
