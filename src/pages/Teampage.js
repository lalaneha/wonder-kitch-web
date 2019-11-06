import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';

class CardExample extends Component {
  render() {
    return (
      <div className= "teammembers">
      <h2 align ="center">Meet our team!</h2>
      <MDBRow>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src="https://lh3.googleusercontent.com/M1BaGJHYL53RAOYTkAFNosCnEmoGeejQB7aRLIlr3guoxijjk1yi8PjspQS66aD0Y8GR5Al20I8JpcqmI_pZe-A30a_9XA_7SYrDdHQEsdawihhvmzu2fQ8koAk8g9wahrgTyIzl42qrB9dGHxTULQ1-L56pMjtoovT5sk2tiEaTA-2q4zp4AfRTgH0hCCJeEnVTpddy3SRSopE_3uXfbQ3ZAP7-EQh3ubC7gMHyDbq75bil_aNESzGJKEubtIPu_1bVXsjvSwkxAHeNA59sikFwLMXiyoMQ3VJrf563dE-BADRwqXQyW11TTIRXxXP0n67mf43Cg7WvQleukJaQm7CrUukwHhbJK7pvj9cWSUCNpDC8KQNr_bCQRWiGuUMfUPvHhoa1AbB66vP_FkwifGsaGCTv3aM-s9ZRRIWMv3xoz6DVoKEslUrzSGz3paNqS5uxY5Y5F6nINZTh2g6zyLq0KlRT3Gzuxztd8n0Ux6WRoZ1ey26USUQ0JQBpQVlt2o4znazU6E-_lCctAc3vcNzI41RvFSoviPrDcc7kMNgX-IWupKDDifHE9LCd5QIE8Ffn6oB6lxvgs4EHbNMd0PbwFLnV_7FOoOZe_nyLPaypoMhT4ZdO0YgPD_vQMwwZv8xiUpGf4CVv2jH8zYaiJGlGP41C6of5QcgyZVHMtVVJsZNL8gsX-pE=s512-no" />
            <MDBCardBody cascade>
              <MDBCardTitle>
              <p align="center">Alexandria Farris</p></MDBCardTitle>
              <MDBCardText> 
              <font size="4">Back-End</font></MDBCardText>
              <MDBBtn href="https://www.linkedin.com/in/alexandria-farris-40708839/">LinkedIn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src="https://lh3.googleusercontent.com/TeUKO1rBXfvQPJRqZI7V4ljfCwu0an2AKbtGq14lnmJ9KMhDeV1YuTCybCTKUyANK5Yu1dBrvTmNE2jsShmwgDztq7H3ib1e27btUGYteCQAslChCX-BI_5OiV19bUIa1wPHCvNoLI-rd7MVwan4sxrbglLoKtyYd56Od0dt2xxkky8VZiFS_EaQs2nuq-hSHjMXGSj11DE9XzeBUCqc3L2V5J_DSQz22CU2bEltUrh68JOZOrCvoT6mkp2Ns43lhHqYs6NUm7fWAfnMfVyfk9Dffq3eH7NtxeMsR61VGjiV_zUCp1C3Z7rAXD3PtiWekEfaEF-Ekp4WlPV3aGIl-OMprMe0RgDlzuUMTZRPEm4glH4M8_EfpDmI0-Cs4NHtWwa6wbl31jIEDBJhM-lodjSBCrMbotNvUdAOmSJ7vnHeisNRdp0vFLiUX6NhSx3dA8aPheUG6TIYSA34sR7BSxaPIfXr-zIfe3ou7By4T_La-sey4m_Mf80ga4wIXcVw64wfpTEpTG6AZdkCShn81af1b09xW6p8XwZCqZaxDImbWAspaoIltAqt2XW1VN53r0gyfzxGf-kLbyPwO-SKR4y4jf2XzNedD_Ct1DIWQGPNgSfYTZpivEc8PAPWaDUKIyIpRPulx3BgHToEn2s8yph6-AedMadbxtP5foYY7OmgMJDXs2-EE5o=s500-no" />
            <MDBCardBody cascade>
              <MDBCardTitle>
              <p align="center">Neha Lal</p></MDBCardTitle>
              <MDBCardText> 
              <font size="4">Gitmaster and Front-end and Back-end</font></MDBCardText>
              <MDBBtn
              href="https://www.linkedin.com/in/neha-lal-bb8639189/">LinkedIn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src="https://lh3.googleusercontent.com/WN_lNG7_zWcBRCKXNltOjXs0ymTmw5bIxuiEFIv4mFx_gIIDdiAY60C0j3-MU8eJ8uN29Bc8Tsx7ul1E3AGGtNxvtsvbmi67hpxAkmM04EAQKrTtwXOIm43i4-vkQW3dE85tkizf0y4crvmP-mtvOVvY0TQb6HdRu-IXSP8kHSAg8HwanVBQHgI2N7do6AD8w7YiCgJgRoBQkQPlLsb65UQmSReh028-PyptVxdlL3E838p2-kEImUAV0WYRX2BAq9DG0rS6b_vyb1Z9XX_oR_VBuw8is9oySJPm-DcEAUWXfGAt2hYbGzTfipoJk8lP8TJDdn7u5FDDudwDhmo1jojplCCh0gHPnOcxIf-76nKLqMF-ke19Xl8BjjCNXXj-M-f5zGPf5PGILaZUs_fIs-5S-4xKi8-TphMCjSu9URlIAbk92KZiBHgrlhunMJsPk2QASysHQu4DifVU8ZrccNjQhFWHJtmgp_jjGg4StpjQkuhtauTaIUF-yrKItQP46B568TKdXiT14d3nkpseTgdQd_EzfgDBaIB-N9dST5njTy5fkJ4AiGMCIyNLru6hWqc5KH0y9AVHi6rMzGwSHHSAPxcbt4M90SW36CzAfYGHp3htuS0WP_TubfMkyOYeQoPmv7jMNFHMPlxP5Y3A26kQNtG6ZXCUnFiLBZQAa9VNGOaeVCqRuG4=w1306-h1390-no"width="400px" height="420px"/>
            <MDBCardBody cascade>
              <MDBCardTitle>
              <p align="center">Rachel Jones</p></MDBCardTitle>
              <MDBCardText>
              <font size="4">Front-end and Project Manager</font></MDBCardText>
              <MDBBtn href="https://www.linkedin.com/in/rachel-jones-99780531/">LinkedIn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src="https://lh3.googleusercontent.com/wYpOSXBelt3X_3Hs3Lp9Etdjbwroc0vg8wEDyoZM9-QNNCQ3Wdyp6SNB-3d2oiTbjiIbaTRKR_3ODLnqx2LGZIM6ThjjYjhfcm36XwE6V5pK-cfYsNDTwZWQdGG61O3vBMRFvgXvcG7b2MoOIp_g7kR_AZdzwyuU665GAAWWBd2Fmea8Rth1NxXt7WSjsAluU1fl9qk-Fp0bqeBmHV33YAwsayCKwhbobzEDZJE-RfmVB_tzWeJC9cDkZjAbpRf4WAs-i9QJAKlNIstANqikg4vXSrTNUgPMlOeV-uLD37sV_BJargkVXucTrC0CugHtqYzLIGjrA4N8eo4Z3rsH_8nND4z904-BkakcTxqwbHVeEiPsr3AujtFroyJaGilSy-ExYtStHpiuun25o1bmkiski09DHxSXB5DvIVLXyxwIkxKH_AqVL8vPkJiscliyFqgIxBlO3Y9xuKbjePeGpIkfRy5RR3UrkR8DfWEz5NVjyJns1ZAeGXWoTbcy0_OOFtqLfBIr1jtk_uYy0ZNyEfVlFfLzzzQ-Zgb40PwQCIUNVaKrJyODocvSFijPGvvbjsEOOWJyDloBS6ghZgBADKAp8JoqnTXY1DdXfto2coX-1noM2SfIsMfYHu3anNOSpytwUV0WzDidfrOLGckXgkT4lKh-Gy5nP_KDAPazAKloUJjljRwFD7w=s287-no" width="500px" height="500px"/>
            <MDBCardBody cascade>
              <MDBCardTitle>
              <p align="center">Amjed Ayoud</p></MDBCardTitle>
              <MDBCardText>
              <font size="4">Back-end</font></MDBCardText>
              <MDBBtn href="https://www.linkedin.com/in/amjed-ayoub-7597935b/">LinkedIn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        {/* <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" />
            <MDBCardBody cascade>
              <MDBCardTitle>Wenhou</MDBCardTitle>
              <MDBCardText> Backend</MDBCardText>
              <MDBBtn href="#">MDBBtn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol> */}
      </MDBRow>
      </div>
    )
  }
}

export default CardExample;

//add form and images of team members

