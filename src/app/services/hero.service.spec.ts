import { ToastrService } from 'ngx-toastr'
import { HeroService } from './hero.service'

xdescribe('Service: ExpenseService', () => {
  let service: HeroService
  const http = jest.fn()

  beforeEach(() => {
    service = new HeroService(http as any, ToastrService as any)
  })

  describe('Test: init component', () => {
    it('should be defined', () => {
      expect(service).toBeDefined()
    })
  })
  /*
  describe('Test: get heroes', () => {
    it('should get all heroes', (done) => {
      const response: Array<Hero> = [
        {
          id: 1,
          name: 'SUPERMAN',
        },
        {
          id: 2,
          name: 'HULK',
        },
      ]

      const httpMock = {
        get: jest.fn().mockReturnValue(of(response)),
      }
      const serviceMock = new HeroesService(httpMock as any)
      serviceMock.getHeroes().subscribe((data) => {
        expect(httpMock.get).toBeDefined()
        expect(httpMock.get).toHaveBeenCalled()
        expect(data).toEqual(response)
        done()
      })
    })
  })

  describe('Test: get hero by ID', () => {
    it('should get hero by ID', (done) => {
      const heroId = 1
      const response: Hero = {
        id: 1,
        name: 'SUPERMAN',
        description: 'Esta es la descripción de SUPERMAN',
        imageURL: 'https://pngimg.com/uploads/superman/superman_PNG75.png',
      }

      const httpMock = {
        get: jest.fn().mockReturnValue(of(response)),
      }
      const serviceMock = new HeroesService(httpMock as any)
      serviceMock.getHeroById(heroId).subscribe((data) => {
        expect(httpMock.get).toBeDefined()
        expect(httpMock.get).toHaveBeenCalled()
        expect(data).toEqual(response)
        done()
      })
    })
  })

  describe('Test: update hero', () => {
    it('should update hero', (done) => {
      const heroId = 1
      const heroUpdate: HeroUpdate = {
        name: 'SUPERMAN',
        description: 'Nueva descripcion',
        imageURL: 'https://pngimg.com/uploads/superman/superman_PNG75.png',
      }

      const response: Hero = {
        id: 1,
        name: 'SUPERMAN',
        description: 'Nueva descripcion',
        imageURL:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngimg.com%2Fimage%2F29170&psig=AOvVaw0BgdekBzmyJJnL5HSfY_Au&ust=1614983464803000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPi95q_Yl-8CFQAAAAAdAAAAABAI',
      }

      const httpMock = {
        patch: jest.fn().mockReturnValue(of(response)),
      }
      const serviceMock = new HeroesService(httpMock as any)
      serviceMock.updateHero(heroId, heroUpdate).subscribe((data) => {
        expect(httpMock.patch).toBeDefined()
        expect(httpMock.patch).toHaveBeenCalled()
        expect(data).toEqual(response)
        done()
      })
    })
  })

  describe('Test: delete hero', () => {
    it('should delete a hero by ID', (done) => {
      const usrId = 123
      const response = {
        success: true,
        message: 'Hero removed successfully',
      }

      const httpMock = {
        delete: jest.fn().mockReturnValue(of(response)),
      }
      const serviceMock = new HeroesService(httpMock as any)
      serviceMock.deleteHero(usrId).subscribe((data) => {
        expect(httpMock.delete).toBeDefined()
        expect(httpMock.delete).toHaveBeenCalled()
        expect(data).toEqual(response)
        done()
      })
    })
  })*/
})
