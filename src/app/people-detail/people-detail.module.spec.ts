import { PeopleDetailModule } from './people-detail.module';

describe('PeopleDetailModule', () => {
  let peopleDetailModule: PeopleDetailModule;

  beforeEach(() => {
    peopleDetailModule = new PeopleDetailModule();
  });

  it('should create an instance', () => {
    expect(peopleDetailModule).toBeTruthy();
  });
});
