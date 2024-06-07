export const getHeroTextQuery = `query NewQuery {
  allMicanoviHeroTekst {
    edges {
      node {
        id
        micanoviHeroTekstFields {
          heroTekstEn
          heroTekstHr
        }
      }
    }
  }
}`;
