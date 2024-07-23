import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import { DynamicContentEditor } from '@pega/cosmos-react-rte';

import * as stories from './demo.stories';

const { DynamicContentEditorDemo } = composeStories(stories);

describe('DynamicContentEditor', () => {
  it('should render insert field button', async () => {
    render(<DynamicContentEditorDemo />);
    const testIds = DynamicContentEditor.getTestIds();
    expect(await screen.findByRole('application')).toBeInTheDocument();
    expect(screen.getByTestId(testIds.insertField)).toBeInTheDocument();
  });
});
