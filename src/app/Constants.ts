import { ValorantMap } from './Core/ValorantMap';
import { Site } from './Core/Site';
import { SiteDescription } from './Core/SiteDescription';

export const ValorantMapInformation: Array<ValorantMap> =
[
  { Name : "Bind", Sites:
    [
      { Name : "A Attack",
        Description: [
          {
            WhereToBe: {Description : "Where to be", ImageUrl : 'https://i.imgur.com/0msbpx5.png'},
            WhereToLook : {Description : "Where to be", ImageUrl : 'https://i.imgur.com/0msbpx5.png'},
            ShotResult : {Description : "ShotResult", ImageUrl : 'https://i.imgur.com/0msbpx5.png'}
          } as SiteDescription
        ] as Array<SiteDescription>
      }
    ] as Array<Site>
  } as ValorantMap,

  { Name : "Split", Sites:
    [
      { Name : "A Attack",
        Description:[
          {
            WhereToBe: {Description : "Where to be", ImageUrl : 'https://i.imgur.com/0msbpx5.png'},
            WhereToLook : {Description : "Where to be", ImageUrl : 'https://i.imgur.com/0msbpx5.png'},
            ShotResult : {Description : "ShotResult", ImageUrl : 'https://i.imgur.com/0msbpx5.png'}
          } as SiteDescription
        ] as Array<SiteDescription>
      }
    ] as Array<Site>
  } as ValorantMap,

  { Name : "Haven", Sites:
    [
      { Name : "A Attack",
        Description: [
          {
            WhereToBe: {Description : "Where to be", ImageUrl : 'https://i.imgur.com/0msbpx5.png'},
            WhereToLook : {Description : "Where to be", ImageUrl : 'https://i.imgur.com/0msbpx5.png'},
            ShotResult : {Description : "ShotResult", ImageUrl : 'https://i.imgur.com/0msbpx5.png'}
          } as SiteDescription
        ] as Array<SiteDescription>
      }
    ] as Array<Site>
  } as ValorantMap,

  { Name : "Ascent", Sites:
    [
      {
        Name : "A Attack",
        Description:
        [
          {
            WhereToBe: {Description : "Where to be", ImageUrl : 'https://i.imgur.com/0msbpx5.png'},
            WhereToLook : {Description : "Where to be", ImageUrl : 'https://i.imgur.com/0msbpx5.png'},
            ShotResult : {Description : "ShotResult", ImageUrl : 'https://i.imgur.com/0msbpx5.png'}
          } as SiteDescription
        ] as Array<SiteDescription>
      }
    ] as Array<Site>
  } as ValorantMap
] as Array<ValorantMap>
