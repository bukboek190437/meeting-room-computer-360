var APP_DATA = {
  "scenes": [
    {
      "id": "0-render_360",
      "name": "RENDER_360",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.05785822510001459,
        "pitch": 0,
        "fov": 1.3401592523986738
      },
      "linkHotspots": [
        {
          "yaw": -0.8341264147082068,
          "pitch": -0.06607811745896441,
          "rotation": 4.71238898038469,
          "target": "1-render-360-2"
        },
        {
          "yaw": -0.5391091804423489,
          "pitch": 0.08238780543341306,
          "rotation": 1.5707963267948966,
          "target": "2-render-360-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-render-360-2",
      "name": "render 360 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.285786284480384,
          "pitch": 0.22458405281478022,
          "rotation": 1.5707963267948966,
          "target": "0-render_360"
        },
        {
          "yaw": 0.17525005162138108,
          "pitch": -0.061198358073880854,
          "rotation": 0,
          "target": "2-render-360-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-render-360-3",
      "name": "render 360 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2961483403288341,
          "pitch": 0.074106087597686,
          "rotation": 0,
          "target": "1-render-360-2"
        },
        {
          "yaw": 0.17403362759558583,
          "pitch": -0.17357411319609106,
          "rotation": 4.71238898038469,
          "target": "0-render_360"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "MEETING ROOM",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
