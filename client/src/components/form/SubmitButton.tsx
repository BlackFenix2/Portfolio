import * as React from 'react';
import { FormContext } from './formContext';

interface IProps {
  name?: string;
  className?: string;
}

class SubmitButton extends React.Component<IProps> {
  // public static contextTypes = {
  //   pristine: () => null,
  //   submitting: () => null
  // };
  public state;
  public render() {
    const { name, children, className } = this.props;
    // const { pristine, submitting } = this.context;
    return (
      <FormContext.Consumer>
        {(context: any) => (
          <button
            type="submit"
            disabled={context.submitting || context.pristine}
            className={className}
          >
            {children || name || 'Submit'}
          </button>
        )}
      </FormContext.Consumer>
    );
  }
}
export default SubmitButton;
