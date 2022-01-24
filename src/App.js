import React from 'react';
import Map from '../src/components/Map';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Map} />
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
            background-image: url('https://vos.land/published_raw/img/default-hexagon.svg');
            min-width: 232px;
            min-height: 232px;
            background-repeat: no-repeat;
            display: flex;
            justify-content: center;
            align-items: center;

            &__asset-info {
              width: 120px;
              color: #fff;
              font-size: 1.2em;
              text-align: center;
              padding-bottom: 24px;

              &__jibun {
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
          }
        `}
      />
    </BrowserRouter>
  );
}

export default App;
