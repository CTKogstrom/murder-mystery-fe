const cards = [
  {
    id: 1,
    title: 'Character 1',
    description: 'This is a description for character 1.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Character 2',
    description: 'This is a description for character 2.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Character 3',
    description: 'This is a description for character 3.',
    image: 'https://via.placeholder.com/150',
  },
];

const DashboardPage = () => {
  return (
    <div className="flex flex-col items-start min-h-screen min-w-full p-8">
      <div className="text-3xl font-bold mb-8 text-left">Dashboard</div>
      <div className="flex flex-col gap-8 w-full max-w-md">
        {cards.map(card => (
          <div key={card.id} className="bg-spooky-backgorund-5 p-4 rounded-lg shadow-md">
            <h2 className="text-lg">{card.title}</h2>
            <p style={{ color: '#555' }}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
