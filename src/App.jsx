import './App.css';
import PlayerCard from './components/PlayerCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr';
import Header from './components/Header';
import Footer from './components/Footer';
import LiveMatches from './components/LiveMatches';
import Rankings from './components/Rankings';
import TeamBuilder from './components/TeamBuilder';
import FootballNews from './components/FootballNews';
import VoteSection from './components/VoteSection';

function App() {
  var players = [
    {
      score: 97,
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ronaldinho.jpg',
      name: 'Ronaldinho',
      equipe: 'https://flagcdn.com/w320/br.png',
      stats: {
        pac: 94,
        sho: 95,
        pas: 92,
        dri: 98,
        def: 40,
        phy: 75
      }
    },

    {
      score: 96,
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lionel_Messi_Argentina_v_Egypt_7_July_2026-316.jpg',
      name: 'Messi',
      equipe: 'https://flagcdn.com/w320/ar.png',
      stats: {
        pac: 88,
        sho: 96,
        pas: 97,
        dri: 99,
        def: 38,
        phy: 70
      }
    },

    {
      score: 96,
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cristiano_Ronaldo_2025_Cropped.jpg',
      name: 'Cristiano Ronaldo',
      equipe: 'https://flagcdn.com/w320/pt.png',
      stats: {
        pac: 90,
        sho: 98,
        pas: 85,
        dri: 91,
        def: 35,
        phy: 85
      }
    },

    {
      score: 95,
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kylian_Mbappe_France_v_Senegal_16_June_2026-269.jpg',
      name: 'Mbappé',
      equipe: 'https://flagcdn.com/w320/fr.png',
      stats: {
        pac: 99,
        sho: 97,
        pas: 88,
        dri: 97,
        def: 40,
        phy: 82
      }
    },

    {
      score: 95,
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Neymar.jpg',
      name: 'Neymar',
      equipe: 'https://flagcdn.com/w320/br.png',
      stats: {
        pac: 91,
        sho: 92,
        pas: 94,
        dri: 98,
        def: 35,
        phy: 65
      }
    },

    {
      score: 94,
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Erling_Haaland_Morocco_v_Norway_7_June_2026-164.jpg',
      name: 'Haaland',
      equipe: 'https://flagcdn.com/w320/no.png',
      stats: {
        pac: 92,
        sho: 99,
        pas: 80,
        dri: 90,
        def: 45,
        phy: 96
      }
    },

    {
      score: 94,
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Vinicius_Junior_Brazil_V_Morocco_13_June_2026-93.jpg',
      name: 'Vinícius Jr',
      equipe: 'https://flagcdn.com/w320/br.png',
      stats: {
        pac: 98,
        sho: 91,
        pas: 86,
        dri: 97,
        def: 32,
        phy: 78
      }
    },

    {
      score: 93,
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mohamed_Salah_Argentina_v_Egypt_7_July_2026-191.jpg',
      name: 'Salah',
      equipe: 'https://flagcdn.com/w320/eg.png',
      stats: {
        pac: 93,
        sho: 94,
        pas: 89,
        dri: 95,
        def: 45,
        phy: 75
      }
    },

    {
      score: 93,
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kevin_De_Bruyne_Belgium_v_USA_6_July_2026-034.jpg',
      name: 'De Bruyne',
      equipe: 'https://flagcdn.com/w320/be.png',
      stats: {
        pac: 76,
        sho: 88,
        pas: 99,
        dri: 91,
        def: 60,
        phy: 78
      }
    },

    {
      score: 92,
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jude_Bellingham_England_v_Ghana_23_June_2026-028.jpg',
      name: 'Bellingham',
      equipe: 'https://flagcdn.com/w320/gb-eng.png',
      stats: {
        pac: 88,
        sho: 87,
        pas: 91,
        dri: 94,
        def: 80,
        phy: 85
      }
    },

    {
      score: 92,
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Best_Footballer_in_Asia_2022_Son_Heung-min.jpg',
      name: 'Son',
      equipe: 'https://flagcdn.com/w320/kr.png',
      stats: {
        pac: 92,
        sho: 93,
        pas: 87,
        dri: 91,
        def: 42,
        phy: 78
      }
    },

    {
      score: 91,
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lamine_Yamal_France_v_Spain_7.24.26-059.jpg',
      name: 'Lamine Yamal',
      equipe: 'https://flagcdn.com/w320/es.png',
      stats: {
        pac: 94,
        sho: 84,
        pas: 93,
        dri: 96,
        def: 35,
        phy: 65
      }
    },

    {
      score: 91,
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rodri_Argentina_v_Spain_19_July_2026-183.jpg',
      name: 'Rodri',
      equipe: 'https://flagcdn.com/w320/es.png',
      stats: {
        pac: 70,
        sho: 82,
        pas: 95,
        dri: 86,
        def: 91,
        phy: 88
      }
    },

    {
      score: 90,
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Riyad_Mahrez.jpg',
      name: 'Riyad Mahrez',
      equipe: 'https://flagcdn.com/w320/dz.png',
      stats: {
        pac: 84,
        sho: 87,
        pas: 91,
        dri: 95,
        def: 35,
        phy: 65
      }
    },

    {
      score: 90,
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Zinedine_%22Zizou%22_Zidane.jpg',
      name: 'Zidane',
      equipe: 'https://flagcdn.com/w320/fr.png',
      stats: {
        pac: 85,
        sho: 91,
        pas: 98,
        dri: 96,
        def: 45,
        phy: 80
      }
    },

    {
      score: 89,
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kaka.JPG',
      name: 'Kaká',
      equipe: 'https://flagcdn.com/w320/br.png',
      stats: {
        pac: 90,
        sho: 89,
        pas: 93,
        dri: 94,
        def: 40,
        phy: 75
      }
    }
  ];

  return (
    <>
    <Navbarr/>
    <Header/>
    <LiveMatches/>
    <Rankings />
    <PlayerCard players={players} />
    <TeamBuilder/>
    <FootballNews/>
    <VoteSection/>
    <Footer/>
    </>
    
  );
}

export default App;