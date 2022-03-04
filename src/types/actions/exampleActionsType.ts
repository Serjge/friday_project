import { exampleAction } from 'store/actions';

export type ExampleActionsType = ExampleType;

export type ExampleType = ReturnType<typeof exampleAction>;
