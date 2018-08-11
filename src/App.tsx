import * as React from 'react';
import './App.css';

import { PlanContainer } from './plan/components/plan.container.component';

class App extends React.Component<object, object> {
  public render() {
    return <PlanContainer />;
  }
}

export default App;
