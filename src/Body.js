import React from 'react';

const Data = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    paragraphText: 'Marketing',
    boldText: 'Boost your conversion rate',
    date:'Mar 16, 2020',
    description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae ilio. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla..',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1526431038803-6f6c3ee137ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    paragraphText: 'Sales',
    boldText: 'How to use search engine optimization to drive sales',
    date:'Mar 10, 2020',
    description: 'Optio cum necessitatibus dolor vaoluptatum provident commodi e. Oui aperiam fugiat nemo cumque',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    paragraphText: 'Business',
    boldText: 'Improve your customer experience',
    date:'Feb 12, 2020',
    description: 'Cupditate malores ullam eveniet adipsci in doloribus nulla minus. Voluptas iustro adipisci rem et corporos. Nostrud sint anim sunt aliqua. Nulla eu labore iruree..',
  },
];

const Body = () => {
  return (
    <div className="container">
      <h2 className="title">API Blog</h2>
      <p className="body_description">Learn how to build applications using Generative AI model APIs</p>
      <div className="cardContainer">
        {Data.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt="Item" className="image" />
            <div className="dateContainer">
              <p className="date">{item.date}</p>
              <p className="paragraphText">{item.paragraphText}</p>
            </div>
            <h4 className="boldText">{item.boldText}</h4>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body 
