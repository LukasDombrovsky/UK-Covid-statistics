// import '@antv/g2/lib/index.css';
import DashboardPage from './dashboard/page';

async function getData(filters: any[], structure: any) {
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
  let resp = await getData([`areaType=region`, `date=2023-06-22`], {
    name: 'areaName',
    cumulativeCases: 'cumCasesByPublishDate',
  });
  const cumCasesByAreas = resp.data
    .sort(
      (a: { cumulativeCases: number }, b: { cumulativeCases: number }) =>
        b.cumulativeCases - a.cumulativeCases
    )
    .slice(0, 5);

  // Get days with most new cases
  resp = await getData([`areaType=nation`, `areaName=england`], {
    date: 'date',
    newCases: 'newCasesByPublishDate',
  });
  const newCasesByDays = resp.data
    .sort(
      (a: { newCases: number }, b: { newCases: number }) =>
        b.newCases - a.newCases
    )
    .slice(0, 5);

  return <DashboardPage data={[cumCasesByAreas, newCasesByDays]} />;
}
