---
title: "About the Survey File PUF Data"
aboutNav:
  - text: "Background"
    link: "#background"
  - text: "More Information on MCBS Survey File PUF Data"
    link: "#information"
  - text: "About This Tool"
    link: "#about"
  - text: "Methodology"
    link: "#methodology"
  - text: "How to Use This Tool"
    link: "#howtouse"
---


<section id='background'>
  <h2>Background</h2>
  <p>Starting with the 2013 data year, the Centers for Medicare & Medicaid Services (CMS) began releasing an annual Medicare Current Beneficiary Survey (MCBS) Survey File Public Use File (PUF) and accompanying documentation to allow researchers to conduct analyses on access to care, health status, knowledge of, attitudes toward, and satisfaction with health care, as well as demographic data and information on health insurance coverage for Medicare beneficiaries living in the community. The MCBS Survey File PUF is not intended to replace the more detailed MCBS Limited Data Set (LDS) files, rather it provides a publicly available alternative that provides protection to the Medicare beneficiaries’ protected health information (PHI). To see how the MCBS PUF differs from the MCBS LDS, check out the <a href='https://www.cms.gov/Research-Statistics-Data-and-Systems/Downloadable-Public-Use-Files/MCBS-Public-Use-File/index'>MCBS PUF Data User’s Guide.</a></p>
  <p>The MCBS PUFs provide increased data access for researchers of the MCBS through a free file download that is consistent with other U.S. Department of Health and Human Services (HHS) public-use survey files. The MCBS PUFs have been evaluated for disclosure risk and additional steps were taken to protect beneficiary confidentiality, so they do not require a Data Use Agreement (DUA).</p>
  <p>The MCBS Survey File PUFs are divided into three segments (Fall, Winter, and Summer) starting with the 2017 data release, which permits the release of data collected in all three seasons (i.e., rounds) of MCBS data collection per year. The samples for the Winter and Summer segments are subsets of the sample for the Fall segment. All three segments contain survey weights that allow for analysis that is representative of the beneficiaries ever enrolled in Medicare at any point in the calendar year. The number of sampled Medicare beneficiaries in the 2016-2019 MCBS Survey File PUFs are listed below.</p>
  <table class='about__table'>
    <thead>
      <tr>
        <th>Survey File PUF Data Year</th>
        <th>Sampled Medicare Beneficiaries</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2016</td>
        <td>12,852</td>
      </tr>
      <tr>
        <td>2017</td>
        <td>13,371</td>
      </tr>
      <tr>
        <td>2018</td>
        <td>13,441</td>
      </tr>
      <tr>
        <td>2019</td>
        <td>14,167</td>
      </tr>
    </tbody>
  </table>
</section>
<section id='information'>
  <h2>More information on MCBS Survey File PUF Data</h2>
  <p>To learn more about the Survey File PUF data and how to appropriately analyze the data, see the following resources:</p>
  <div class='about__indent'>
    <h4>Questionnaires</h4>
    <p>Download the <a href='https://www.cms.gov/Research-Statistics-Data-and-Systems/Research/MCBS/Questionnaires'>MCBS Questionnaires.</a></p>
  </div>
  <div class='about__indent'>
    <h4>Public Use File</h4>
    <p>Download the <a href='https://www.cms.gov/Research-Statistics-Data-and-Systems/Downloadable-Public-Use-Files/MCBS-Public-Use-File/index'>2013-2019 MCBS Survey File PUFs</a>, including the analytic weights, data user documentation, and codebook.</p>
  </div>
</section>
<section id='about'>
  <h2>About this tool</h2>
  <p>The MCBS Survey File PUF Data Tool presents estimates from the 2016-2019 MCBS Survey File PUFs with appropriate weights. Estimates represent the population of beneficiaries who were ever enrolled in Medicare at any time during the calendar year.</p>
  <p>The Survey File PUF Data Tool is comprised of a series of dashboards related to Medicare beneficiaries’ health status, medical conditions, insurance coverage, and information on their access to and satisfaction with health care services. Estimates for various demographic and socioeconomic subgroups are also presented.</p>
  <p>The tool presents a visual approximation of the analysis; all conclusions should be verified through appropriate analysis of the publically available datasets.</p>
  <h2 id='methodology'>Methodology</h2>
  <h3>Criteria for Inclusion in the Tool</h3>
  <p>All estimates in the Survey File PUF Data Tool exclude beneficiaries for whom PUF data are missing for a given measure. Missing variable data, which encompass “Don’t Know”, “Not Ascertained”, and “Refused” responses, are excluded from both the numerator and denominator in the calculation of each measure.</p>
  <h3>Comparison to the MCBS Chartbook</h3>
  <p>The Survey File PUF Data Tool was designed to follow many of the conventions of the annual <a href='https://www.cms.gov/Research-Statistics-Data-and-Systems/Research/MCBS/Data-Tables'>MCBS Chartbook</a>, including the following:</p>
  <ul>
    <li>The tool provides users with estimates for large segments of the population of Medicare beneficiaries living in the community.</li>
    <li>Measures included in this tool are created using Survey File PUF variables that have a stable universe and are comparable across years, unless otherwise noted below.</li>
    <li>When possible, the tool uses the same measure construction logic as the Chartbook, but using similar variables available in the Survey File PUF.</li>
  </ul>
  <p>While the Survey File PUF Data Tool adheres to many of the conventions of the MCBS Chartbook, it differs in the following ways:</p>
  <ul>
    <li>The tool presents estimates generated from the Survey File PUF whereas the Chartbook presents estimates generated from the LDS files.</li>
    <li>The tool does not include estimates for the population of Medicare beneficiaries living in facilities since those data are only available in the LDS and not the Survey File PUF.</li>
    <li>Similarly, the tool does not include estimates of utilization or expenditures since those data are only available in the LDS and not the Survey File PUF.</li>
    <li>The tool presents Standard Errors (SEs) for the topline point estimates and shows the 95% confidence intervals for the breakdown variables whereas the Chartbook provides SEs for all point estimates, including the breakdown variables.</li>
    <li>Due to differences in the variables available in the Survey File PUF and LDS, the tool uses a slightly different measure construction for some measures, including age, type of Medicare coverage, supplemental private insurance measures, hearing trouble (other than deafness), vision problem (other than blindness), number of chronic conditions and satisfaction with care measures.</li>
  </ul>
  <h3>Data Tool Measure Construction</h3>
  <p>Several measures included in the dashboards are created using derived variables. These derived variables combine information from one or more variables available in the Survey File PUFs:</p>
  <div class='about__indent'>
    <h3>Chronic Condition Measures</h3>
    <p><span class='about__indent__bold'>Arthritis:</span> Respondents were asked if a doctor or other health professional had ever told them that they had rheumatoid arthritis, osteoarthritis, or any other form of arthritis. Respondents who reported more than one condition were only counted once for the purposes of calculating the proportion of beneficiaries with arthritis. The proportion of beneficiaries with arthritis is not presented for 2019 because variables for osteoarthritis and other types of arthritis are not available in the 2019 Survey File PUF. Rheumatoid arthritis continues to be captured in the Number of Chronic Conditions in 2019.</p>
    <p><span class='about__indent__bold'>Hearing Trouble, Other than Deafness:</span> Respondents were asked if they use a hearing aid or have at least a little trouble hearing. Respondents who reported more than one indicator were only counted once for the purposes of calculating the proportion of beneficiaries with hearing trouble (other than deafness).</p>
    <p><span class='about__indent__bold'>Heart Disease:</span> Respondents were asked if a doctor or other health professional had ever told them that they had myocardial infarction (heart attack), angina pectoris or coronary heart disease (CHD), congestive heart failure, or any other heart condition. Respondents who reported more than one condition are only counted once for the purposes of calculating the proportion of beneficiaries with heart disease.</p>
    <p><span class='about__indent__bold'>Mental Condition:</span> Respondents were asked if a doctor or other health professional had ever told them that they had depression or a mental/psychiatric disorder. Respondents who reported more than one condition are only counted once for the purposes of calculating the proportion of beneficiaries with mental condition.</p>
    <p><span class='about__indent__bold'>Number of Chronic Conditions:</span> Respondents were asked whether they have ever had any of the following 11 conditions: Alzheimer's disease or dementia, heart disease, cancer (other than skin), hypertension, diabetes, arthritis, osteoporosis/broken hip, stroke, pulmonary disease, high cholesterol, and depression. Responses were combined to calculate the total number of listed conditions. As noted above, variables for osteoarthritis and other types of arthritis are not available in the 2019 Survey File PUF, so only rheumatoid arthritis is captured in the Number of Chronic Conditions in 2019.</p>
    <p><span class='about__indent__bold'>Osteoporosis/Broken Hip:</span> Respondents were asked if a doctor or other health professional had ever told them that they had osteoporosis/broken hip. Respondents who reported more than one condition are only counted once for the purposes of calculating the proportion of beneficiaries with osteoporosis/broken hip.</p>
    <p><span class='about__indent__bold'>Vision Problem, Other than Blindness:</span> Respondents were asked if they wear eyeglasses/contact lenses, have at least a little trouble seeing, or a doctor or other health professional had told them that they had cataracts, glaucoma, diabetic retinopathy, or macular degeneration. Respondents who reported more than one condition are only counted once for the purposes of calculating the proportion of beneficiaries with vision problem (other than blindness).</p>
  </div>
  <div class='about__indent'>
    <h3>Insurance Measures</h3>
    <p><span class='about__indent__bold'>Employer-Sponsored Insurance (ESI):</span> Beneficiaries were coded as having employer-sponsored private insurance if they had employer-sponsored insurance coverage in that calendar year, and had general coverage (between 2016-2018) or at least one of the following services covered in their private insurance: dental, vision, or Rx drugs. Beneficiaries who had more than one service covered in their private plans are only counted once for the purpose of calculating the proportion of beneficiaries with employer-sponsored insurance coverage. Starting in 2019, the variable indicating whether beneficiaries’ private health insurance included general coverage was removed from the Survey File PUF. As a result, ESI now only captures beneficiaries whose private insurance covers dental services, vision services, or Rx drugs.</p>
    <p><span class='about__indent__bold'>Self-Pay Insurance:</span> Beneficiaries were coded as having self-pay insurance if they had self-purchased private insurance coverage in that calendar year, and had general coverage (between 2016-2018) or at least one of the following services covered in their private insurance: dental, vision, or Rx drugs. Beneficiaries who had more than one service covered in their private plans are only counted once for the purpose of calculating the proportion of beneficiaries with self-pay insurance coverage. Starting in 2019, the variable indicating whether beneficiaries’ private health insurance included general coverage was removed from the Survey File PUF. As a result, self-pay insurance now only captures beneficiaries whose private insurance covers dental services, vision services, or Rx drugs.</p>
    <p><span class='about__indent__bold'>Supplemental Private Insurance:</span> Beneficiaries were coded as having supplemental private insurance if they had one or more private plans in that calendar year, and had general coverage (between 2016-2018) or at least one of the following services covered in their private insurance: dental, vision, or Rx drugs. Beneficiaries who had more than one service covered in their private plans are only counted once for the purpose of calculating the proportion of beneficiaries with supplemental private insurance coverage. Starting in 2019, the variable indicating whether beneficiaries’ private health insurance included general coverage was removed from the MCBS Survey File PUF. As a result, supplemental private insurance now only captures beneficiaries whose private insurance covers dental services, vision services, or Rx drugs.</p>
    <p><span class='about__indent__bold'>Type of Medicare Coverage:</span> Beneficiaries were coded as having Medicare Advantage (MA) coverage if they had MA coverage for a full or partial calendar year. Otherwise, beneficiaries were coded as having traditional Fee-for-Service (FFS) coverage.</p>
  </div>
  <div class='about__indent'>
    <h3>Satisfaction with Care Measures</h3>
    <p><span class='about__indent__bold'>Satisfaction with Care:</span> Respondents were asked about their satisfaction with various aspects of their health care. For all satisfaction measures, responses of “Very satisfied” were collapsed under “Satisfied”. A “yes” response to either category is considered a “yes” response in the derived variable. Other categories that are not displayed in the Survey File PUF Data Tool include: “Very dissatisfied” and “Dissatisfied”. Responses of “No experience” are excluded from the denominator.</p>
  </div>
  <h3>Estimates and Weights</h3>
  <p>Percentage estimates are calculated using the survey weights supplied in the PUF. Variance estimates (which are needed to derive standard errors and confidence intervals) are calculated using replicate weights supplied in the file. See documentation for MCBS weights.
  </p>
  <h3>Confidence Interval Calculation</h3>
  <p>Within the dashboard, the confidence intervals within each dot plot are adjusted using the Goldstein-Healy method as described in:</p>
  <div class='about__indent about__indent--citation'>
    <p>Wright, Tommy, Martin Klein, and Jerzy Wieczorek. “A Primer on Visualizations for Comparing Populations, Including the Issue of Overlapping Confidence Intervals.” The American Statistician 73, no. 2 (2019): 165-178. DOI: 10.1080/00031305.2017.1392359</p>
    <p><a href='https://doi.org/10.1080/00031305.2017.1392359'>(link)</a></p>
  </div>
  <p>This adjustment is done so that the confidence intervals can be readily used to determine if two estimates within a chart are, statistically speaking, different (<a href='https://mcbs-interactives.norc.org/about-survey.html#toc3-3'>see the use of confidence intervals to compare groups</a>).</p>
  <h3>Software Used</h3>
  <p>The MCBS COVID-19 Data Tool was created using R Shiny and D3.js.</p>
</section>
<section id='howtouse'>
  <h2>How to use this tool</h2>
  <p>Each dashboard consists of a bar chart presenting outcome variables related to a theme. For example, the dashboard on Preventive Behaviors shows the percent of beneficiaries who have changed their behavior in response to COVID-19. The dashboard also shows a series of dot plots which dynamically update to show the demographic breakdown of responses for a particular behavior.</p>
  <h3>Interactivity</h3>
  <p>Click on a single bar within the bar chart to see how that topic differs within each group displayed in the dot plots. The dot plots include confidence intervals which can be used to identify potential meaningful differences.</p>
  <p>Clicking on a bar in the bar chart on the left adjusts the universe of beneficiaries in the dot plots on the right. For example, clicking on the bar corresponding to “Fee-for-Service (FFS)” in the Insurance Coverage dashboard updates the universe of beneficiaries in the dot plots to all beneficiaries who had a valid response to the question about type of Medicare coverage.”</p>
  <p>Click on SELECT A YEAR (e.g., 2019) to change the survey year.</p>
  <p>Scales on the dot plots are dynamic. Estimates should only be compared within groups in the dot plots, not across. For example, the “Male” group should not be compared to the “75+ years” group.</p>
  <h3>Hover-Overs</h3>
  <p>Hovering over a particular bar or dot in the tool allows users to view additional details about that particular question and the survey responses. For example, hovering over the bar corresponding to “Fee-for-Service (FFS)” in the Insurance Coverage dashboard will provide the percent estimate for that category as well as the standard error.</p>
  <h3>Use Confidence Intervals to Compare Groups</h3>
  <p>Users can perform statistical hypothesis tests (p = 0.05) to determine if there is a meaningful difference between two percentages within a chart. The width of the intervals indicates the measure of uncertainty in the estimates.</p>
  <p>Given the method used to construct the confidence intervals (see note in the Methodology section), if two confidence intervals within a chart overlap, then there is no meaningful difference between the percentages for those two groups. However, if two confidence intervals within a chart do not overlap, then there is a meaningful difference between the percentages for those two groups.</p>
  <p>Confidence intervals are adjusted for direct comparison across groups; the confidence interval associated with each demographic group does NOT represent a univariate confidence interval for that group’s proportion. Confidence intervals should not be interpreted for a single demographic group, only used for hypothesis tests of differences between groups. However, the width of the confidence interval does provide a visual sense of the uncertainty of the estimate. All conclusions should be verified through appropriate analysis of the data.</p>
  <p>For more information, <a href='/contact'>contact us.</a></p>
</section>
