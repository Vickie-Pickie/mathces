export default function sortHealthBar(hero) {
  return hero.sort((a, b) => b.health - a.health);
}
