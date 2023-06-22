import DashboardPage from './dashboard/page';

async function getData(areaType: string) {
  const filters = [`areaType=${areaType}`, `date=2023-06-22`],
    structure = {
      name: 'areaName',
      cumulativeCases: 'cumCasesByPublishDate',
      date: 'date',
    };

  const apiParams = `filters=${filters.join(';')}&structure=${JSON.stringify(
    structure
  )}`;
  const encodedParams = encodeURI(apiParams);

  const res = await fetch(
    `https://api.coronavirus.data.gov.uk/v1/data?${encodedParams}`
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  // Get 5 areas with most cumulative cases
  let resp = await getData('region');
  const cumCasesByAreas = resp.data
    .sort(
      (a: { cumulativeCases: number }, b: { cumulativeCases: number }) =>
        b.cumulativeCases - a.cumulativeCases
    )
    .slice(0, 5);

  console.log(cumCasesByAreas);

  return <DashboardPage data={[cumCasesByAreas]} />;
}
