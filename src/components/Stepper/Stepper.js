import React from 'react';
import { useTheme, useMediaQuery } from '../../../node_modules/@mui/material/index';

const CustomStepper = (props) => {
  // const classes = useStyles();
  const theme = useTheme();
  //   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.up('sm') && theme.breakpoints.down('md'));
  const isLaptop = useMediaQuery(theme.breakpoints.up('md') && theme.breakpoints.down('lg'));
  const isDesktop = useMediaQuery('(min-width: 1025px)');
  const is4K = useMediaQuery('(min-width: 2561px)');

  // const [activeStep, setActiveStep] = useState(initialStep);
  const activeStep = props.CompletedSteps;

  const stepWidth = `${98 / props.steps.length}%`;

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
        {props.steps.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: stepWidth,
                height: isTablet ? 50 : isLaptop ? 50 : isDesktop ? 50 : is4K ? 50 : 50,
                backgroundColor: index == activeStep || index < activeStep ? '#0174bf' : '#ffffff',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTopLeftRadius: index == 0 && 5,
                borderBottomLeftRadius: index == 0 && 5
                // borderTop: '1px solid #e3e3e3',
                // borderBottom: '1px solid #e3e3e3'
                // border: index < activeStep || index == activeStep ? '1px solid #0174bf' : '1px solid #e2e2e2'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: '10px',
                  padding: 2,
                  width: '100%'
                  // backgroundColor: 'red'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 5,
                    width: '100%',
                    // padding:'4',
                    // backgroundColor: 'red',
                    color: index < activeStep || index == activeStep ? '#ffffff' : '#000000',
                    fontSize: isTablet
                      ? index < activeStep && index > activeStep
                        ? 6
                        : 6
                      : isLaptop
                      ? index < activeStep && index > activeStep
                        ? 7
                        : 7
                      : isDesktop
                      ? index < activeStep && index > activeStep
                        ? 9
                        : 9
                      : index < activeStep && index > activeStep
                      ? 8
                      : 8,
                    fontWeight: index < activeStep || index > activeStep ? 400 : 700
                  }}
                >
                  {item.status}
                </div>
                <div
                  style={{
                    marginLeft: 5,
                    // backgroundColor: 'green',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    color: index < activeStep || index == activeStep ? '#ffffff' : '#000000',
                    fontSize: isTablet
                      ? index < activeStep && index > activeStep
                        ? 5
                        : 5
                      : isLaptop
                      ? index < activeStep && index > activeStep
                        ? 5
                        : 5
                      : isDesktop
                      ? index < activeStep && index > activeStep
                        ? 6
                        : 6
                      : index < activeStep && index > activeStep
                      ? 6
                      : 6,
                    fontWeight: index < activeStep || index > activeStep ? 400 : 700
                  }}
                >
                  {item.date}
                </div>
              </div>
              <div style={{ display: 'flex', width: 50, height: 50, backgroundColor: '#0174bf', position: 'relative' }}>
                <div
                  style={{
                    width: isTablet ? 25 : isLaptop ? 25 : isDesktop ? 25 : 28,
                    backgroundColor: index == activeStep || index < activeStep ? '#0174bf' : '#ffffff',
                    // backgroundColor:'teal',
                    outline: 'none',
                    border: 'none',
                    borderColor: index == activeStep || index < activeStep ? '#0174bf' : '#ffffff',
                    height: '100%'
                  }}
                ></div>
                {/* corner box */}
                <div
                  style={{
                    width: isTablet ? 27 : isLaptop ? 27 : isDesktop ? 27 : 27,
                    backgroundColor:
                      index == activeStep
                        ? '#ffffff'
                        : '#0174bf' && index < activeStep
                        ? '#0174bf'
                        : '#ffffff' && index == activeStep.length - 1
                        ? 'transparent'
                        : '#ffffff',
                    // backgroundColor:'yellow',
                    // border: '1px solid',
                    borderColor:
                      index == activeStep
                        ? '#ffffff'
                        : '#0174bf' && index < activeStep
                        ? '#0174bf'
                        : '#ffffff' && index == activeStep.length - 1
                        ? 'transparent'
                        : '#ffffff',

                    border: 'none',
                    // borderTop: index == steps.length - 1 ? '5px solid transparent' : '1px solid #e3e3e3  ',
                    // borderBottom: index == steps.length - 1 ? '10px solid transparent' : '1px solid #e3e3e3',
                    height: isTablet ? '100%' : isLaptop ? '100%' : isDesktop ? '100%' : '100%',
                    outline: 'none'
                  }}
                ></div>
                <div
                  style={{
                    width: isTablet ? 35 : isLaptop ? 35 : isDesktop ? 35 : 35,
                    height: isTablet ? 35 : isLaptop ? 35 : isDesktop ? 35 : 35,
                    backgroundColor: index == activeStep || index < activeStep ? '#0174bf' : '#ffffff',
                    transform: 'rotate(45deg)',
                    position: 'absolute',
                    right: isTablet ? 8 : isLaptop ? 8 : isDesktop ? 8 : 8,
                    top: isTablet ? 8 : isLaptop ? 8 : isDesktop ? 8 : 8,
                    border: '3px solid',
                    borderColor:
                      index == activeStep || index < activeStep ? '#1f90d8 #1f90d8  #0174bf #0174bf' : '#e3e3e3 #e3e3e3 #ffffff #ffffff'
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div>
        <button onClick={handleBack} disabled={activeStep === 0}>
          Back
        </button>
        <button onClick={handleNext} disabled={activeStep === steps.length - 1}>
          Next
        </button>
      </div> */}
    </div>
  );
};

export default CustomStepper;

CustomStepper.defaultProps = {
  steps: [
    { status: 'Order Place', date: '23-12-23 10:11 PM' },
    { status: 'Order Accepted', date: '23-12-23 10:12 PM' },
    { status: 'Order Invoiced', date: '23-12-23 10:13 PM' },
    { status: 'Invoice Paid', date: '23-12-23 10:14 PM' },
    { status: 'Order Dispatched', date: '23-12-23 10:15 PM' },
    { status: 'GRN', date: '23-12-23 10:16 PM' },
    { status: 'Order Completed', date: '23-12-23 10:17 PM' }
  ]
};
