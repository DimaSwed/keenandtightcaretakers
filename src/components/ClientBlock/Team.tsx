import { Box, Stack, Typography } from '@mui/material'
import { FC } from 'react'

interface ITeamProps {
  isExpanded: boolean
}

const Team: FC<ITeamProps> = ({ isExpanded }) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flex: '1 1 45%',
          gap: '10px',
          '@media (max-width: 992px)': {
            flexDirection: 'column',
            flexWrap: 'nowrap'
          }
        }}
      >
        <Stack gap="10px">
          <Box
            sx={{
              // flex: '1 1 45%',
              maxWidth: '471px',
              width: '100%',
              margin: '0 auto',
              height: 'fit-content',
              padding: '20px',
              border: '1px solid rgba(218, 78, 40, 1.0)',
              borderRadius: '20px',
              boxSizing: 'border-box',
              '@media (max-width: 992px)': {
                maxWidth: '660px'
              },
              '@media (max-width: 768px)': {
                maxWidth: '100%'
              }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: '30px' }}>
              <Box
                component="img"
                src={'./team/Samuel Mwangi-img1.png'}
                alt="Samuel Mwangi"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginRight: '10px'
                }}
              />
              <Box>
                <Typography variant="h5" mb="2px" color="text.primary">
                  Samuel Mwangi
                </Typography>
                <Typography variant="h5" fontWeight={400} color="divider">
                  Production Manager
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontWeight: '500'
              }}
            >
              We partnered with this company to upgrade our roasting equipment, and the difference
              has been remarkable. The new system not only improved the consistency of our coffee
              roasts but also allowed us to increase production without sacrificing quality. Their
              team was incredibly supportive, guiding us through the installation and training
              process. Now, our coffee beans deliver a flavor profile that our customers rave about,
              and our operations are running more efficiently than ever.
            </Typography>
          </Box>

          <Box
            sx={{
              // flex: '1 1 45%',
              maxWidth: '471px',
              width: '100%',
              margin: '0 auto',
              height: 'fit-content',
              padding: '20px',
              border: '1px solid rgba(218, 78, 40, 1.0)',
              borderRadius: '20px',
              boxSizing: 'border-box',
              '@media (max-width: 992px)': {
                maxWidth: '660px'
              },
              '@media (max-width: 768px)': {
                maxWidth: '100%'
              }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: '30px' }}>
              <Box
                component="img"
                src={'./team/John Kamau-img3.png'}
                alt="John Kamau"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginRight: '10px'
                }}
              />
              <Box>
                <Typography variant="h5" mb="2px" color="text.primary">
                  John Kamau
                </Typography>
                <Typography variant="h5" fontWeight={400} color="divider">
                  Managing Director
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontWeight: '500'
              }}
            >
              From the initial consultation to installation, their team demonstrated an exceptional
              understanding of coffee processing. The conveyor and milling systems they provided
              have optimized our workflow, allowing us to process larger quantities of beans without
              compromising quality. Their local presence and quick response times make them a
              reliable partner for coffee producers in Africa.
            </Typography>
          </Box>

          {isExpanded && (
            <Box
              sx={{
                // flex: '1 1 45%',
                maxWidth: '471px',
                width: '100%',
                margin: '0 auto',
                height: 'fit-content',
                padding: '20px',
                border: '1px solid rgba(218, 78, 40, 1.0)',
                borderRadius: '20px',
                boxSizing: 'border-box',
                '@media (max-width: 992px)': {
                  maxWidth: '660px',
                  display: 'none'
                }
                // '@media (max-width: 768px)': {
                //   maxWidth: '100%'
                // }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: '30px' }}>
                <Box
                  component="img"
                  src={'./team/Mary Njoroge-img5.png'}
                  alt="Mary Njoroge"
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginRight: '10px'
                  }}
                />
                <Box>
                  <Typography variant="h5" mb="2px" color="text.primary">
                    Mary Njoroge
                  </Typography>
                  <Typography variant="h5" fontWeight={400} color="divider">
                    Quality Control Lead
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: '500'
                }}
              >
                Maintaining the unique flavor profile of Tanzanian coffee is our top priority, and
                their roasting equipment has been a game changer for us. The precision and control
                it offers ensure that every batch meets our exact standards. Our clients have
                noticed the difference, and so have we. This investment has strengthened our
                position in the regional market.
              </Typography>
            </Box>
          )}
        </Stack>

        <Stack gap="10px">
          <Box
            sx={{
              // flex: '1 1 45%',
              maxWidth: '471px',
              width: '100%',
              margin: '0 auto',
              height: 'fit-content',
              padding: '20px',
              border: '1px solid rgba(218, 78, 40, 1.0)',
              borderRadius: '20px',
              boxSizing: 'border-box',
              '@media (max-width: 992px)': {
                maxWidth: '660px'
              },
              '@media (max-width: 768px)': {
                maxWidth: '100%'
              }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: '30px' }}>
              <Box
                component="img"
                src={'./team/Ahmed Hassan-img2.png'}
                alt="Ahmed Hassan"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginRight: '10px'
                }}
              />
              <Box>
                <Typography variant="h5" mb="2px" color="text.primary">
                  Ahmed Hassan
                </Typography>
                <Typography variant="h5" fontWeight={400} color="divider">
                  CEO
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontWeight: '500'
              }}
            >
              In Ethiopia, coffee is not just a product; it’s part of our identity. We needed
              reliable roasting equipment to match the expectations of our customers. Their machines
              exceeded our expectations with precise controls and consistent roasting quality. The
              support team was always available to answer our questions, even post-installation.
              We’re proud to serve coffee roasted with their technology to buyers across Africa and
              the Middle East.
            </Typography>
          </Box>

          <Box
            sx={{
              // flex: '1 1 45%',
              maxWidth: '471px',
              width: '100%',
              margin: '0 auto',
              height: 'fit-content',
              padding: '20px',
              border: '1px solid rgba(218, 78, 40, 1.0)',
              borderRadius: '20px',
              boxSizing: 'border-box',
              '@media (max-width: 992px)': {
                maxWidth: '660px'
              },
              '@media (max-width: 768px)': {
                maxWidth: '100%'
              }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: '30px' }}>
              <Box
                component="img"
                src={'./team/Fatima Al-Mansouri-img4.png'}
                alt="Fatima Al-Mansouri"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginRight: '10px'
                }}
              />
              <Box>
                <Typography variant="h5" mb="2px" color="text.primary">
                  Fatima Al-Mansouri
                </Typography>
                <Typography variant="h5" fontWeight={400} color="divider">
                  Operations Director
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontWeight: '500'
              }}
            >
              As a leading coffee supplier in the Middle East, efficiency and quality are critical
              for our business. Their automated packaging solutions have significantly streamlined
              our operations, reducing manual labor and improving the shelf appeal of our products.
              The equipment integrates seamlessly into our production line, and their team was
              instrumental in ensuring a smooth implementation. I would highly recommend them to
              anyone in the coffee industry.
            </Typography>
          </Box>

          {isExpanded && (
            <Box
              sx={{
                // flex: '1 1 45%',
                maxWidth: '471px',
                width: '100%',
                margin: '0 auto',
                height: 'fit-content',
                padding: '20px',
                border: '1px solid rgba(218, 78, 40, 1.0)',
                borderRadius: '20px',
                boxSizing: 'border-box',
                '@media (max-width: 992px)': {
                  maxWidth: '660px',
                  display: 'none'
                }
                // '@media (max-width: 768px)': {
                //   maxWidth: '100%'
                // }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: '30px' }}>
                <Box
                  component="img"
                  src={'./team/Hassan Bakari-img6.png'}
                  alt="Hassan Bakari"
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginRight: '10px'
                  }}
                />
                <Box>
                  <Typography variant="h5" mb="2px" color="text.primary">
                    Hassan Bakari
                  </Typography>
                  <Typography variant="h5" fontWeight={400} color="divider">
                    Founder & CEO
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: '500'
                }}
              >
                Our partnership with this company has elevated our production capabilities to a
                whole new level. The sorting and roasting machines we purchased have not only
                enhanced the consistency of our coffee but also reduced waste significantly. Their
                team took the time to understand our unique challenges and provided tailored
                solutions that perfectly fit our needs. Thanks to their equipment, we’ve been able
                to expand our market reach and gain more recognition across East Africa.
              </Typography>
            </Box>
          )}
        </Stack>
      </Box>
      {isExpanded && (
        <Box
          sx={{
            display: 'none',
            mt: '10px',
            gap: '10px',
            '@media (max-width:992px)': { flexDirection: 'column', display: 'flex' }
          }}
        >
          <Box
            sx={{
              // flex: '1 1 45%',
              maxWidth: '471px',
              width: '100%',
              margin: '0 auto',
              height: 'fit-content',
              padding: '20px',
              border: '1px solid rgba(218, 78, 40, 1.0)',
              borderRadius: '20px',
              boxSizing: 'border-box',
              '@media (max-width: 992px)': {
                maxWidth: '660px'
              },
              '@media (max-width: 768px)': {
                maxWidth: '100%'
              }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: '30px' }}>
              <Box
                component="img"
                src={'./team/Mary Njoroge-img5.png'}
                alt="Mary Njoroge"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginRight: '10px'
                }}
              />
              <Box>
                <Typography variant="h5" mb="2px" color="text.primary">
                  Mary Njoroge
                </Typography>
                <Typography variant="h5" fontWeight={400} color="divider">
                  Quality Control Lead
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontWeight: '500'
              }}
            >
              Maintaining the unique flavor profile of Tanzanian coffee is our top priority, and
              their roasting equipment has been a game changer for us. The precision and control it
              offers ensure that every batch meets our exact standards. Our clients have noticed the
              difference, and so have we. This investment has strengthened our position in the
              regional market.
            </Typography>
          </Box>
          <Box
            sx={{
              // flex: '1 1 45%',
              maxWidth: '471px',
              width: '100%',
              margin: '0 auto',
              height: 'fit-content',
              padding: '20px',
              border: '1px solid rgba(218, 78, 40, 1.0)',
              borderRadius: '20px',
              boxSizing: 'border-box',
              '@media (max-width: 992px)': {
                maxWidth: '660px'
              },
              '@media (max-width: 768px)': {
                maxWidth: '100%'
              }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: '30px' }}>
              <Box
                component="img"
                src={'./team/Hassan Bakari-img6.png'}
                alt="Hassan Bakari"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginRight: '10px'
                }}
              />
              <Box>
                <Typography variant="h5" mb="2px" color="text.primary">
                  Hassan Bakari
                </Typography>
                <Typography variant="h5" fontWeight={400} color="divider">
                  Founder & CEO
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontWeight: '500'
              }}
            >
              Our partnership with this company has elevated our production capabilities to a whole
              new level. The sorting and roasting machines we purchased have not only enhanced the
              consistency of our coffee but also reduced waste significantly. Their team took the
              time to understand our unique challenges and provided tailored solutions that
              perfectly fit our needs. Thanks to their equipment, we’ve been able to expand our
              market reach and gain more recognition across East Africa.
            </Typography>
          </Box>
        </Box>
      )}
    </>
  )
}

export default Team
