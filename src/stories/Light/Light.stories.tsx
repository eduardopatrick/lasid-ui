import { Meta, StoryObj } from "@storybook/react";
import { Light } from "../../Light";

const meta: Meta<typeof Light> = {
    component: Light,
    title: 'Light',
    parameters: {
        layout: 'centered',
    },
}

export default meta

type Story = StoryObj<typeof meta>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

export const Default: Story = { 
    args: {
    },
    argTypes: {
        variant: {
            control: {type: 'select'},
            options: ['green', 'yellow', 'red']
        }
    }
}

export const Yellow: Story = { 
    args: {
        variant: 'yellow',
    },
}

export const Red: Story = { 
    args: {
        variant: 'red',
    },
}

export const Grouped: Story = { 
    render: () => (
        <div
        style={{display: 'flex' ,flexDirection: 'column', background: 'grey', gap: 10, border: '1px solid black', width: 'max-content', padding: 10}}>
            <Light variant="red" />
            <Light variant="yellow" />
            <Light variant="green" />
        </div>
    )
}
