import styles from './app.module.scss';
import Progress from './components/progress';
import { ContainerDiv, Div } from './components/progress/css';

export function App() {
  return (
    <div>
      <Div>
          <h1>
            React Components Demo
          </h1>
          <p>
            Here are all the components we have built in React for Friday Design
            System. Below are the examples we have formed here using these
            componenet. We tried to implement all the usabily cases for every
            component
          </p>
        <h2>Progressbar</h2>
        <ContainerDiv>
          <Progress progressbarheading='Progress' progressbarstatus={100} />
        </ContainerDiv>
     </Div>
    </div>
  );
}

export default App;
