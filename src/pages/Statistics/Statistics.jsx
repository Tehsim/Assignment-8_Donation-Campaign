import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import useGetPhones from '../../hook/useGetPhones';

const Statistics = () => {
  const [phones] = useGetPhones();
  const [donationsMade, setDonationsMade] = useState(0);
  const [totalDonations, setTotalDonations] = useState(0);

  // Calculate the number of donations made and total donations
  useEffect(() => {
    if (phones) {
      const donations = phones.filter((phone) => phone.category === 'Donation'); // Filter by category
      const donationsMade = donations.length;
      const totalDonations = donations.reduce((total, phone) => total + phone.price, 0);

      setDonationsMade(donationsMade);
      setTotalDonations(totalDonations);
    }
  }, [phones]);

  // Sample data for the pie chart
  const data = {
    labels: ['Donations Made', 'Total Donations'],
    datasets: [
      {
        data: [donationsMade, totalDonations],
        backgroundColor: ['#FF444A', '#36A2EB'],
      },
    ],
  };

  return (
    <div>
      <h2>Donations Statistics</h2>
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <Pie data={data} />
      </div>
    </div>
  );
};

export default Statistics;
