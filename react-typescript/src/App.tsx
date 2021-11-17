import './App.css';

import { PageHeader } from './components/PageHeader';
import { Greet } from './components/Greet';
import { Person } from './components/Person'
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Button } from './components/Button';
import { Input } from './components/Input';

import { Color } from './components/state/Color';
import { Counter } from './components/reducer/Counter';
import { Effect } from './components/effect/Effect';

function App() {
  
  const personName = {
    first: 'Yunlong',
    last: 'Jiao'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]

  return (
    <div className="App">
      <PageHeader title="Hello Chicooooos" />
      <Greet name="Rafa" messageCount={5} isLoggedIn={false}/>
      <Greet name="Kyo" isLoggedIn={true}/>
      <Person name={personName} />
      <PersonList names={nameList}/>
      <Status status='loading' />
      <Status status='success' />
      <Status status='error' />
      <Heading>Placeholder TEXT</Heading>
      <Heading>
        <Person name={personName} />
      </Heading>
      
      <Button handleClick={(event, id) => { 
        console.log('Button Clicked', id, event);
      }} />
      <Input value='' handleChange={(event) => {
        console.log(event);
      }} />

      <Color />

      <Counter />

      <Effect />

    </div>
  );
}

export default App;
