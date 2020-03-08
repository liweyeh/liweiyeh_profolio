// Dependecies
import React, { Suspense } from 'react';
import ThemeProvider from './theme/ThemeProvider';
import { CircularProgress } from '@material-ui/core';

// Language Import
import { IntlProvider } from 'react-intl';
import messages_ja from './translations/ja.json';
import messages_en from './translations/en.json';
const messages = {
  ja: messages_ja,
  en: messages_en
};
const language = navigator.language.split(/[-_]/)[0] === 'ja' ? 'ja' : 'en';

// Sections
const Home = React.lazy(() => import('./components/welcome.js'));

function App() {
  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <ThemeProvider>
        <Suspense fallback={<CircularProgress />}>
          <Home />
        </Suspense>
      </ThemeProvider>
    </IntlProvider>
  );
}

export default App;
