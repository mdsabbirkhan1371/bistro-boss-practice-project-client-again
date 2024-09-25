import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
import ourMenuImg from '../../assets/menu/banner3.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';

const Menu = () => {
  const [menu] = useMenu();
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const offered = menu.filter(item => item.category === 'offered');
  const dessert = menu.filter(item => item.category === 'dessert');

  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Our Menu</title>
      </Helmet>
      <Cover image={ourMenuImg} title={'Our Menu'}></Cover>
      {/* -------------todays offer------------- */}
      <SectionTitle
        subHeading={"Dont't Miss"}
        heading={"Today's Offer"}
      ></SectionTitle>
      {/* offered menu items  */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert items  */}
      <MenuCategory
        title={'dessert'}
        items={dessert}
        image={dessertImg}
      ></MenuCategory>
      {/* salad items  */}
      <MenuCategory
        title={'salad'}
        items={salad}
        image={saladImg}
      ></MenuCategory>
      {/* pizza items  */}
      <MenuCategory
        title={'pizza'}
        items={pizza}
        image={pizzaImg}
      ></MenuCategory>
      {/* pizza items  */}
      <MenuCategory title={'soup'} items={soup} image={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
