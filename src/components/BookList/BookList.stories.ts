import type { Meta, StoryObj } from '@storybook/react';

import { BookList } from './BookList';

const meta: Meta<typeof BookList> = {
    title: 'Book list',
    component: BookList,
};

export default meta;

type Story = StoryObj<typeof BookList>;

export const Default: Story = {};
