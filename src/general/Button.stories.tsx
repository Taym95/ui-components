import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Button, Link, ExternalLink } from './Button';
import IconAdd from './icon/IconAddCircle';
import IconDelete from './icon/IconDelete';
import IconBuild from './icon/IconBuild';
import VolstTheme from '../VolstTheme';
import CenterDecorator from '../../storybook/CenterDecorator';

storiesOf('General / Button', module)
  .addDecorator(CenterDecorator)
  .add(
    'standard',
    withInfo()(() => {
      return <Button>Save thingy</Button>;
    })
  )
  .add(
    'with tone',
    withInfo()(() => {
      return (
        <div>
          <div>
            <Button>Primary</Button>
            <Button disabled>Primary disabled</Button>
          </div>
          <div>
            <Button tone="success">Success</Button>
            <Button tone="success" disabled>
              Success disabled
            </Button>
          </div>
          <div>
            <Button tone="danger">Danger</Button>
            <Button tone="danger" disabled>
              Danger disabled
            </Button>
          </div>
          <div>
            <Button tone="warning">Warning</Button>
            <Button tone="warning" disabled>
              Warning disabled
            </Button>
          </div>
          <div>
            <Button tone="dark">Dark</Button>
            <Button tone="dark" disabled>
              Dark disabled
            </Button>
          </div>
          <div>
            <Button tone="light">Light</Button>
            <Button tone="light" disabled>
              Light disabled
            </Button>
          </div>
        </div>
      );
    })
  )
  .add(
    'with an overwritten primaryColor',
    withInfo()(() => {
      return (
        <VolstTheme theme={{ buttonPrimaryColor: '#DE0000' }}>
          <div>
            <Button>Primary</Button>
            <Button tone="success">Success</Button>
            <Button tone="warning">Warning</Button>
          </div>
        </VolstTheme>
      );
    })
  )
  .add(
    'full width',
    withInfo()(() => {
      return <Button fullWidth>Save thingy</Button>;
    })
  )
  .add(
    'small',
    withInfo()(() => {
      return <Button small>Save thingy</Button>;
    })
  )
  .add(
    'disabled',
    withInfo()(() => {
      return (
        <div>
          <Button disabled>Save thingy</Button>
          <Link to="/" disabled>
            Disabled link
          </Link>
        </div>
      );
    })
  )
  .add(
    'ghost',
    withInfo()(() => {
      return (
        <div>
          <Button ghost>Scare kids</Button>
          <br />
          <Button ghost tone="success">
            <IconAdd />
          </Button>
          <Link ghost to="/" tone="danger">
            <IconDelete />
          </Link>
          <Link ghost to="/" tone="primary">
            <IconBuild />
          </Link>
          <Link ghost to="/" tone="primary" disabled>
            <IconBuild />
          </Link>
          <br />
          <Link ghost to="/" tone="danger">
            Delete <IconDelete />
          </Link>
          <Link ghost to="/" disabled>
            Restore <IconDelete />
          </Link>
        </div>
      );
    })
  )
  .add(
    'loading',
    withInfo()(() => {
      class MyComponent extends React.Component {
        state = { loading: false };
        timeout = null;
        setLoading = () => {
          this.setState({ loading: true });
          this.timeout = setTimeout(() => {
            this.setState({ loading: false });
          }, 2000);
        };
        componentWillUnmount() {
          clearTimeout(this.timeout);
        }
        render() {
          return (
            <div>
              <Button loading={this.state.loading} onClick={this.setLoading}>
                Save me
              </Button>
              <Button loading>Always loading</Button>
            </div>
          );
        }
      }
      return <MyComponent />;
    })
  )
  .add(
    'with icons',
    withInfo()(() => {
      return (
        <div>
          <p>with standard styling</p>
          <Button tone="success">
            <IconAdd />
          </Button>
          <Link to="/" tone="danger">
            <IconDelete />
          </Link>
          <Link to="/" tone="primary">
            <IconBuild />
          </Link>
          <Link to="/" tone="primary" disabled>
            <IconBuild />
          </Link>
          <p>with ghost styling</p>
          <Button ghost tone="success">
            <IconAdd />
          </Button>
          <Link ghost to="/" tone="danger">
            <IconDelete />
          </Link>
          <Link ghost to="/" tone="primary">
            <IconBuild />
          </Link>
          <Link ghost to="/" tone="primary" disabled>
            <IconBuild />
          </Link>
        </div>
      );
    })
  )
  .add(
    'as React Router link',
    withInfo()(() => {
      return (
        <div>
          <Link to="/">
            <IconAdd /> Go to something
          </Link>
          <Link to="/" disabled>
            <IconAdd /> Go to something
          </Link>
        </div>
      );
    })
  )
  .add(
    'as external link',
    withInfo()(() => {
      return (
        <div>
          <ExternalLink href="https://google.com" ghost>
            <IconAdd /> Go to Google
          </ExternalLink>
          <ExternalLink href="https://google.com" disabled>
            <IconAdd /> Go to Google
          </ExternalLink>
        </div>
      );
    })
  )
  .add(
    'shown inline',
    withInfo()(() => {
      return (
        <div>
          {'Nowadays there are many social media like '}
          <ExternalLink link href="https://google.com">
            Google
          </ExternalLink>
          {' or '}
          <Button link>Facebook</Button>
          {'. Good filler text ey?'}
        </div>
      );
    })
  );
