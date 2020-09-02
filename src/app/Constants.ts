import { ValorantMap } from './Core/ValorantMap';
import { Site } from './Core/Site';
import { SiteDescription } from './Core/SiteDescription';

export const PrimaryColorPallette = "#0f3460";

export const ValorantMapInformation: Array<ValorantMap> =
[

  { Name : "Haven", Sites:
    [
      { Name : "Garage Defence",
        Description: [
          {
            WhereToBe: {Description : "Where to be", ImageUrl : 'https://i.imgur.com/ZGaX0rg.png'},
            WhereToLook : {Description : "Where to look", ImageUrl : 'https://i.imgur.com/k2rRMCw.png'},
            ShotResult : {Description : "ShotResult", ImageUrl : 'https://i.imgur.com/OTRnVnN.png'}
          } as SiteDescription
        ] as Array<SiteDescription>
      }
    ] as Array<Site>
  } as ValorantMap,
  { Name : "Bind", Sites:
    [
      { Name : "A Attack",
        Description: [
          {
            WhereToBe: {Description : "Where to be", ImageUrl : 'https://i.imgur.com/0msbpx5.png'},
            WhereToLook : {Description : "Where to look", ImageUrl : 'https://i.imgur.com/0msbpx5.png'},
            ShotResult : {Description : "ShotResult", ImageUrl : 'https://i.imgur.com/0msbpx5.png'}
          } as SiteDescription
        ] as Array<SiteDescription>
      },
      { Name : "B Attack",
        Description: [
          {
            WhereToBe: {Description : "Where to be", ImageUrl : 'https://i.imgur.com/0msbpx5.png'},
            WhereToLook : {Description : "Where to look", ImageUrl : 'https://i.imgur.com/0msbpx5.png'},
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
