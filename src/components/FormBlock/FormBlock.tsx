'use client'
import { FC } from 'react'
import { Box, Typography, CardMedia, Stack } from '@mui/material'
import ContactForm from '../FormBlock/Form'
import styles from '../FormBlock/Form.module.sass'

const Form: FC = () => {
  return (
    <div className={styles.formContainer} id="form-section">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        <Box
          sx={{
            display: { sm: 'block' },
            ml: { lg: 0 },
            mb: { lg: 0 },
            '@media (max-width: 992px) and (min-width: 769px)': {
              marginLeft: '0px',
              marginBottom: '0px',
              position: 'absolute',
              bottom: '-60px',
              left: '-190px'
            },
            '@media (max-width: 768px) and (min-width: 480px)': {
              maxHeight: '554px',
              position: 'absolute',
              bottom: '-60px',
              left: '-140px'
            },
            '@media (max-width:480px)': { display: 'none' }
          }}
        >
          <CardMedia
            component="img"
            image="/red-combine.png"
            sx={{
              objectFit: 'cover',

              maxHeight: { lg: 'auto', md: '791px', sm: '448px', xs: '300px' },
              '@media (max-width: 992px) and (min-width: 769px)': {
                maxHeight: '700px'
              },
              '@media (max-width: 768px) and (min-width: 480px)': {
                maxHeight: '450px'
              }
            }}
          />
        </Box>

        <Stack
          sx={{
            maxWidth: { xl: '684px', lg: '600px', md: '660px', sm: '448px', xs: '100%' },
            '@media (max-width: 992px) and (min-width: 769px)': {
              maxWidth: '660px',
              marginLeft: '290px',
              mb: '-50px'
            },
            '@media (max-width: 768px) and (min-width: 480px)': {
              maxWidth: '728px'
            },
            width: '100%'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              mb: '10px'
            }}
          >
            <Typography
              variant="h2"
              sx={{
                textTransform: 'uppercase',
                display: 'inline-block',
                color: 'primary.light',
                fontFamily: 'Poppins',
                alignSelf: 'flex-end',
                '@media (max-width: 992px) and (min-width: 769px)': {
                  marginRight: '70px'
                },
                '@media (max-width: 768px) and (min-width: 480px)': {
                  alignSelf: 'center'
                },
                '@media (max-width: 479px) and (min-width: 320px)': {
                  marginRight: '30px'
                },
                '@media (max-width: 320px) ': {
                  marginRight: '0px',
                  alignSelf: 'flex-start'
                }
              }}
            >
              Let’s Start a
            </Typography>
            <Typography
              variant="h2"
              sx={{
                textTransform: 'uppercase',
                display: 'inline-block',
                color: 'primary.light',
                fontFamily: 'Poppins',
                alignSelf: 'flex-start'
              }}
            >
              Conversation
            </Typography>
          </Box>
          <Box mb="40px" alignSelf="flex-end">
            <Typography
              variant="body2"
              color="primary.light"
              sx={{
                maxWidth: { xl: '476px', lg: '420px', md: '476px', sm: '476px', xs: '448px' }
              }}
            >
              Have questions or need more information about our coffee equipment solutions? We’re
              here to help! Fill out the form below, and one of our experts will get back to you
              shortly. Whether it’s about product availability, pricing, or tailored solutions,
              we’re ready to assist.
            </Typography>
          </Box>
          <ContactForm />
        </Stack>
      </Box>
    </div>
  )
}

export default Form
