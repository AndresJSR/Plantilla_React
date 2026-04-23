import React, { useEffect, useState } from 'react';
import { Country } from '../../models/Country';
import GenericTable from '../../components/GenericTable';
import { countryService } from '../../services/countryService';
import { useNavigate } from 'react-router-dom';

const Countries: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<Country[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const countries = await countryService.getCountries();
    console.log('Countries loaded:', countries);
    setData(countries);
  };

  const handleAction = (action: string, item: Record<string, any>) => {
    if (action === 'view') {
      console.log('View country:', item);
      navigate(`/countries/view/${encodeURIComponent(item.name)}`);
    }
  };

  const tableData = data.map((country) => ({
    name: country.name?.common || 'Sin nombre',
    capital: country.capital?.join(', ') || 'Sin capital',
    region: country.region || 'Sin región',
  }));

  console.log('Table data:', tableData);

  return (
    <div>
      <h2>Country List</h2>

      <GenericTable
        data={tableData}
        columns={['name', 'capital', 'region']}
        actions={[{ name: 'view', label: 'View' }]}
        onAction={handleAction}
      />
    </div>
  );
};

export default Countries;
