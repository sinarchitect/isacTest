import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SharedContextProvider from '../context';
import ComponentA from '../components/ComponentA';
import ComponentB from '../components/ComponentB';

describe('SharedContext Components', () => {
  it('updates both ComponentA and ComponentB when shared state changes', () => {
    const { getByLabelText, getByText } = render(
      <SharedContextProvider>
        <ComponentA />
        <ComponentB />
      </SharedContextProvider>
    );
    const inputA = getByLabelText('Component A Input') as HTMLInputElement; 
    const inputB = getByLabelText('Component B Input') as HTMLInputElement;

    fireEvent.change(inputA, { target: { value: 'SinaKalhor' } });
    expect(inputB.value).toBe('SinaKalhor');

    fireEvent.change(inputB, { target: { value: 'Mehrshid' } });
    expect(inputA.value).toBe('Mehrshid');
  });
});