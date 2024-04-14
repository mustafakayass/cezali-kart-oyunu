import './App.css';
import { Helmet } from 'react-helmet';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Helmet>
        <title>Cezalı Kart Oyunu</title>
        <meta name="Cezalı Kart Oyunu" content="Rakibinin cezalarına beraber karar verelim" />  
        <meta property='og:title' content='Cezalı Kart Oyunu'/>
        <meta property='og:description' content='Rakibinin cezalarına beraber karar verelim'/>
        <meta property='og:url' content='https://ceza.vercel.app/'/>
        <meta property="og:image" content="https://ogcdn.net/6064b869-74ed-4eb9-b76c-0b701ffe7e6b/v4/ceza.vercel.app/Cezal%C4%B1%20Kart%20Oyunu/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2Ff3a27916-1a70-462e-b53a-e24d39251edd.jpg%3Ftoken%3Da87OOlBeoztOEyGiRkDVU6zkxR4_wNKRrtt9Aq1aX6Q%26height%3D900%26width%3D1200%26expires%3D33249116563/og.png"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="ceza.vercel.app"/>
        <meta property="twitter:url" content="https://ceza.vercel.app"/>
        <meta name="twitter:title" content="Cezalı Kart Oyunu"/>
        <meta name="twitter:description" content="Rakibinin cezalarına beraber karar verelim"/>
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <meta name="twitter:image" content="../public/meta-image.png"></meta>
      </Helmet>
          <Home/>
    </div>
  );
}

export default App;
