
import './App.css';
import Header from './components/Header';
import Accessories from './assets/Desktop-Accessories.jpg';
import ModelS from './assets/Desktop-ModelS.jpg';
import Model3 from './assets/Desktop-Model3.jpg';
import ModelX from './assets/Desktop-ModelX.jpg';
import ModelY from './assets/Desktop-ModelY.jpg';
import SolarPanels from './assets/Desktop-SolarPanels.jpg';
import SolarRoof from './assets/Desktop-SolarRoof.jpg';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <Header />
    <div className="app__itemsContainer">
      
      <Item
      title='Model S'
      desc='Order Online for Touchless Delivery'
      descLink=''
      backgroundImg={ModelS}
      leftBtnText='CUSTOM ORDER'
      leftBtnLink=''
      rightBtnText='EXISTING INVENTORY'
      rightBtnLink=''
      twoButtons={true}
      first
      >
      </Item>
      <Item
      title='Model 3'
      desc='Order Online for Touchless Delivery'
      descLink=''
      backgroundImg={Model3}
      leftBtnText='CUSTOM ORDER'
      leftBtnLink=''
      rightBtnText='EXISTING INVENTORY'
      rightBtnLink=''
      twoButtons={true}
      >
      </Item>
      <Item
      title='Model X'
      desc='Order Online for Touchless Delivery'
      descLink=''
      backgroundImg={ModelX}
      leftBtnText='CUSTOM ORDER'
      leftBtnLink=''
      rightBtnText='EXISTING INVENTORY'
      rightBtnLink=''
      twoButtons={true}
      >
      </Item>
      <Item
      title='Model Y'
      desc='Order Online for Touchless Delivery'
      descLink=''
      backgroundImg={ModelY}
      leftBtnText='CUSTOM ORDER'
      leftBtnLink=''
      rightBtnText='EXISTING INVENTORY'
      rightBtnLink=''
      twoButtons={true}
      >
      </Item>
      <Item
      title='Lowest Cost Solar Panels in America'
      desc='Money-back guarantee'
      descLink=''
      backgroundImg={SolarPanels}
      leftBtnText='ORDER NOW'
      leftBtnLink=''
      rightBtnText='LEARN MORE'
      rightBtnLink=''
      twoButtons={true}>
      </Item>
      <Item
      title='Solar Roof'
      desc='Order Online for Touchless Delivery'
      descLink=''
      backgroundImg={SolarRoof}
      leftBtnText='CUSTOM ORDER'
      leftBtnLink=''
      rightBtnText='EXISTING INVENTORY'
      rightBtnLink=''
      twoButtons={true}
      >
      </Item>
      <Item
      title='Accessories'
      desc=''
      descLink=''
      backgroundImg={Accessories}
      leftBtnText='SHOP NOW'
      leftBtnLink=''
      rightBtnText=''
      rightBtnLink=''
      twoButtons={false}
      >
      </Item>
    </div>
    </div>
  );
}

export default App;
