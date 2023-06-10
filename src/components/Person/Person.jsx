import RadarChart from './RadarChart';

export const data = {
  labels: ['Teamwork', 'Innovation', 'Efficiency', 'Results'],
  datasets: [
    {
      label: 'Ratings',
      data: [2, 7, 3, 5],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

function internalPerson(name, role, level, teamwork, innovation, efficiency, results) {
  this.name = name
  this.role = role
  this.level = level
  this.traits = {
    teamwork, innovation, efficiency, results
  }
}

function Person() {
  return <>
    <RadarChart data={data} />
  </>
}

export default Person;
