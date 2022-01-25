import React from 'react';
import Main from '../src/pages/Main';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/property/:asset_pnu']}>
          <Main />
        </Route>
      </Switch>
      <Global
        styles={css`
          ${emotionReset}
          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
          }

          .marker {
            background-image: url('https://user-images.githubusercontent.com/70619304/150925831-69dde97d-31bc-4119-9c94-e0719534b762.png');
            background-repeat: no-repeat;
            display: flex;
            justify-content: center;
            align-items: center;

            &__asset-info {
              color: #fff;
              text-align: center;
              padding-bottom: 24px;

              &__address {
                font-weight: bold;
                margin: 16px 0;
              }

              &__price {
                background-color: #ff6565;
                border-radius: 20px;
                padding: 4px 8px;
                white-space: nowrap;
              }
            }
            -webkit-animation: rotate 10s linear infinite;
            animation-play-state: paused;
          }

          @-webkit-keyframes rotate {
            from {
              -webkit-transform: rotate(0deg);
            }
            to {
              -webkit-transform: rotate(360deg);
            }
          }

          .marker.loading {
              animation-play-state: running;
            }
          }
        `}
      />
    </BrowserRouter>
  );
}

export default App;
