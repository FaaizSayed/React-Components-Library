import Button from '../components/button/index';

export default {
    title: 'Button',
    component: Button
};

const Template = args => <Button {...args} ></Button>

export const Default = () => <Button>Button</Button>;

export const ButtonElement = Template.bind({});
ButtonElement.args = {
    color: 'red',
    textSize: 'small',
    rounded: false,
    children: 'Button'
};

// export const GreenSmall = () => <Button color='green' textSize='small'>Button</Button>
// export const GreenMedium = () => <Button color='green' textSize='medium'>Button</Button>
// export const GreenLarge = () => <Button color='green' textSize='large'>Button</Button>
// export const GreenSmallRounded = () => <Button color='green' textSize='small' rounded={true}>Button</Button>
// export const GreenMediumRounded = () => <Button color='green' textSize='medium' rounded={true}>Button</Button>
// export const GreenLargeRounded = () => <Button color='green' textSize='large' rounded={true}>Button</Button>

// export const BlueSmall = () => <Button color='blue' textSize='small'>Button</Button>
// export const BlueMedium = () => <Button color='blue' textSize='medium'>Button</Button>
// export const BlueLarge = () => <Button color='blue' textSize='large'>Button</Button>
// export const BlueSmallRounded = () => <Button color='blue' textSize='small' rounded={true}>Button</Button>
// export const BlueMediumRounded = () => <Button color='blue' textSize='medium' rounded={true}>Button</Button>
// export const BlueLargeRounded = () => <Button color='blue' textSize='large' rounded={true}>Button</Button>