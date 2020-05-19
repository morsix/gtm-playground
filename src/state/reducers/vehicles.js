export const TOOGLE_SHORTLIST = "@vehicles/TOOGLE_SHORTLIST"


export const toggleShortlist = (vehicleId) => {
    return {
        type: TOOGLE_SHORTLIST,
        payload: vehicleId
    }
}

const initialState = {
    data: {byId: {
        car1 : {
          vehicleId: "car1",
          name: "1 Car 2.0 TDI",
          imgLink: "/assests/images/car1.jpg",
          description: "The car description goes here. Nice looking car taking you from A to B.",
          isShortlisted: false,
        },
        car2 : {
          vehicleId: "car2",
          name: "2 Car 2.0 TDI",
          imgLink: "/assests/images/car2.jpg",
          description: "The car description goes here. Nice looking car taking you from A to B.",
          isShortlisted: false,
        },
        car3 : {
          vehicleId: "car3",
          name: "3 Car 2.0 TDI",
          imgLink: "/assests/images/car3.jpg",
          description: "The car description goes here. Nice looking car taking you from A to B.",
          isShortlisted: false,
        },
        car4 : {
          vehicleId: "car4",
          name: "4 Car 2.0 TDI",
          imgLink: "/assests/images/car4.jpg",
          description: "The car description goes here. Nice looking car taking you from A to B.",
          isShortlisted: false,
        },
        car5 : {
          vehicleId: "car5",
          name: "5 Car 2.0 TDI",
          imgLink: "/assests/images/car5.jpg",
          description: "The car description goes here. Nice looking car taking you from A to B.",
          isShortlisted: false,
        },
        car6 : {
          vehicleId: "car6",
          name: "6 Car 2.0 TDI",
          imgLink: "/assests/images/car6.jpg",
          description: "The car description goes here. Nice looking car taking you from A to B.",
          isShortlisted: false,
        },
        car7 : {
          vehicleId: "car7",
          name: "7 Car 2.0 TDI",
          imgLink: "/assests/images/car7.jpg",
          description: "The car description goes here. Nice looking car taking you from A to B.",
          isShortlisted: false,
        },
        car8 : {
          vehicleId: "car8",
          name: "8 Car 2.0 TDI",
          imgLink: "/assests/images/car8.jpg",
          description: "The car description goes here. Nice looking car taking you from A to B.",
          isShortlisted: false,
        },
        car9 : {
          vehicleId: "car9",
          name: "9 Car 2.0 TDI",
          imgLink: "/assests/images/car9.jpg",
          description: "The car description goes here. Nice looking car taking you from A to B.",
          isShortlisted: false,
        },
        car10 : {
          vehicleId: "car10",
          name: "10 Car 2.0 TDI",
          imgLink: "/assests/images/car10.jpg",
          description: "The car description goes here. Nice looking car taking you from A to B.",
          isShortlisted: false,
        }
    }
      }
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOOGLE_SHORTLIST: 
            return {
                ...state,
                data: {
                    ...state.data,
                    byId : {
                        ...state.data.byId,
                        [action.payload] : {
                            ...state.data.byId[action.payload],
                            isShortlisted:  !state.data.byId[action.payload].isShortlisted
                        }
                    }
                }
            }
        default: 
        return initialState;
    }
}

export default reducer;