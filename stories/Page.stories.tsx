import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';
import { action } from '@storybook/addon-actions';
import Page from '../src/Page/Page';

const meta: Meta = {
    title: 'Page',
    component: Page,
    argTypes: {
        children: {
            defaultValue: 'Default'
        }
    }
};

export default meta;

const Template: Story<Props> = (args) => <Page />;

export const Default = Template.bind({});
