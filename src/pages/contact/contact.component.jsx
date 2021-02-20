import { useState } from 'react';
import { FormInput } from '@components/form-input/form-input.component';
import { Button } from '@components/button/button.component';
import { ContactContainer, Title, GroupContainer, TextAreaContainer, TextAreaLabel } from './contact.styles';


const INITIAL_STATE = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

export const ContactPage = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const handleChange = event => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setState(INITIAL_STATE);
  }

  return (
    <ContactContainer>
      <Title as='h2'>Contact us</Title>
      <span>We do our best to respond as soon as possible.</span>
      <form className='form' onSubmit={handleSubmit} netlify>
        <FormInput
          type='text'
          name='name'
          value={state.name}
          label='Name'
          onChange={handleChange}
          required
        />
        <FormInput
          type='email'
          name='email'
          value={state.email}
          label='Email'
          onChange={handleChange}
          required
        />
        <FormInput
          type='text'
          name='subject'
          value={state.subject}
          label='Subject'
          onChange={handleChange}
          required
        />
        <GroupContainer>
          <TextAreaLabel
            htmlFor='message'
            className={`${state.message.length ? 'shrink ' : ''}`}>
            Message
          </TextAreaLabel>
          <TextAreaContainer
            name='message'
            value={state.message}
            onChange={handleChange}
          />
        </GroupContainer>
        <Button style={{ width: '100%' }} type='submit'>Send message</Button>
      </form>
    </ContactContainer>
  );
}