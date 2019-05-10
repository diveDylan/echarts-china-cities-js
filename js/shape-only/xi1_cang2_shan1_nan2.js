(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('山南', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"山南"},"geometry":{"type":"Polygon","coordinates":["@@PETALPLRTAXGLGHYdDRBRDBNBLFLTAPAVCRFLJLJLFPARIFLLXDNJHREPHNH`A`@XERCNIDORAJJJNTDLCX@XGTALJREJELOJKNENCVDVCN@DKHOLKRCRHJDFBFBJ@JALEJEJIFAN@JAHADBDDFHNHFDHNBBTJFBJBLLNFFDHDFANGNCR@`ERCRDLFJRHLJJLERGPAHJ@V@BBLFBJFFDHJBDJDJHHHBFFLDHD@HEDEFIHADBPFVBNDTFPHDLBNABILKPGPANFNPLHJ@BEN@PBDHP@DCTCLKHQXEHGJAJDX@FBFDFHBFBDBFFFNFNDHDLFTFJH@F@LMDWBADAHBH@HAFAB@BBH@HBNAFB@A@AAE@C@CB@BABABBB@F@D@DCDCDCFAF@@BLHTFNFTBLID[CYA[AWJWNKJKLGCMKMIOKQMMIMIKOKECDOGOCSBQBQAK@EKKKMBSJOBQFONETCRGVEJF@N@XNJTJDRCTBPNRJPNRPXJTNJPLTFP@TANENGLHLRPRRLVJVFXARENGFQNKDMAORIVAXAVBNFNLJLNNRFTDNCZCZADPBNJLNJ\\IVHDLJLLRNDRIRKVAPCTANGHOPMRITGPGNINMJQJOAKGMEQEWLOLSVSNONMVKTGB@VAJMBOLGVIJQDSBUFUNMEKSKKKAMBOCQCSJSJERGFQCY@WBYLGRKNICOMICIGMKGWEUA[CYFECAIAMIIGEOAAAAIDQHKBCAQIQCGGSE_KQGGCAKCUKQQUOQMMKIWAOESEIACMEMMCMKOaEQ@W@[EUMIOMOQKCCCCKIWIYKOO@QESAQKYGYCYQWEaLUHMI]IKEEYYaASDYM[UQWCGIOEOCM@SCYIMKQSGABEDA@CBA@E@C@CBABABEBC@ADABCDABCBC@A@A@C@A@CACAA@CAEAE@EAAAAAEAA@C@ABCBA@CBAAC@A@ABA@@BC@C@CBC@ABA@CBE@C@C@A@EBADAD@B@B@DBB@DC@CBC@CBAB@B@DAD@DA@@BCACCCCACCEEECCA@C@C@ABCB@F@B@BCDCACACAA@C@ABCBABADABADCBAD@B@DBF@BAB@BABC@CBC@C@C@A@CCCCA@@AC@A@C@EBAACCCCAACACAAAA@A@@C@E@AACACCAECCAE@C@EACACCCCAA@C@A@C@AAACEACCCCCACAAACCECCCEAACC@ABCDCDGBCBC@A@C@C@AAE@A@CBABEBE@CBABC@C@ADCBCBADCBEBABABABADADCFADCDADCDADADCDCBCBABCB@BAB@BADAFABADCD@BAB@BBB@B@BA@E@CBC@ABAB@DBFBDBDBHDDBBBBFBF@D@DBBDBDB@B@D@DBBDBFBDB@B@FCB@BDDDDDDBBAD@B@D@BBDBD@FBDAFBD@D@D@BDBDFDFDF@BDDDBBBDFBBHHFBFBB@JAFAB@@AD@BADABADABABADADAFABAB@AC@ABABADAB@F@DAB@DAFAHADADAFABABAD@@AD@BAD@D@BAD@BADCDADABAD@DAB@B@@A@CB@@AB@@BBBB@@A@ABABABA@AJEDCDBHLDBBDRGXDRCVELATDTKTIZB^CZCPSJOHGFADCDABA@CBE@A@A@C@C@C@CBA@ABAD@B@D@D@DAD@FADAB@B@DBDBDBDABADABAB@DBF@DBF@DAD@DAB@B@BBDDBBDBD@DAB@D@F@B@BHBFBF@JFH@LBFAFJLFFBBBB@B@HBFHJH@HDJJDBJ@LDLJHAB@NCVKD@HNB@H@HEBA@CCEACBCBABABABADCDCBCBCB@BCDA@ABABCBCBE@ABBFBDBFBFDFBDBFBFBB@D@DABAFADADCF@H@F@LCTAbCKJxAdBZCbE`THFVnBB`JpIL[LWNQZMB@dB^JVARC`ApQJgB@@AAACCCCCAAE@EBAB@DAFBFDD@L@NCNAJCJAF@F@JFHBHBJBFAHAD@DBFBFBRBDBVCRAVHPFXFZAVKHeVCbRJ`C\\NXPZTNKRUJ_NMHBRHFBD@D@BC@ECGCC@CBADEBCBE@EDEFCFAR@N@HAFCBE@GAKDGBG@GDEFIDCLIDEBCDAJ@JEDEHEJANCB@@ACAAC@C@CBAFEFEDABC@CA@EGAABABCBA@GDCAAIMAGAEBA@GAAEEACBCBCDE@EAKDCHGDEBCCEMEACKM@EFKAEAE@ABCB@HMJIBE@CAEAE@E@CACBSBEDIBIDGFGFCJIHEDGD@F@B@DABC@AD@BAFAB@H@D@B@B@@ADA@AD@F@B@B@BCD@B@BBB@HBB@D@BABCFAB@B@DDB@D@N@B@B@DBB@D@@AH@H@FAFABABAB@F@DBBB@BF@DBH@H@H@F@FAD@B@H@B@BA@AAC@ABCBAB@F@D@BAAC@C@ABE@A@AAC@ABCBABEBABABABABABAB@BCDEDEBCBCBABABA@ABEBCBADAPQLSHCBABCBA@E@CBAFAFAD@B@FDB@B@HCJAF@DADADAB@DCBCAA@C@A@C@ABA@AB@BOAG@AACAA@AFE@A@CAE@E@AAIAACAAAA@A@C@A@@CBAB@@A@A@CBAFEDCBA@A@AACAABCBADCBA@A@AA@@AA@C@AAAAAC@A@A@CA@@C@ABE@ABABA@A@AAAAABC@C@C@A@ABC@CBABABABC@A@C@EACAAACCAAACAEAAA@CAC@CAAACAAAA@ABC@A@A@ADCB@D@B@B@BCBCBADAFAD@@A@A@A@A@CBEDAB@B@D@DAJIDC@C@C@C@A@CDCDCBABAFCFABCFEDCBG@C@A@EDODGBE@A@CBG@CBCDEDABADAH@LAFCDABABAB@BCHEFAH@H@L@LBJBD@HCFGFABAB@@AD@@AB@BAB@@AB@@AB@DABAFCB@BABAB@@AB@@AB@@A@ABA@A@A@A@CB@@A@A@ABA@AB@B@BAB@@AB@B@@ABA@AB@@A@ADEBG@ABA@CBG@A@C@C@EDCDCBGBEBABC@C@C@EBADADADCBE@ABEAGAEAEAC@GAE@A@C@EBGACCCAA@A@CBCBCDABCBAB@B@@AB@D@B@BABABABA@AB@@AB@@AB@B@@AB@D@B@BAB@BAD@@AB@BAB@BA@AB@@AB@@A@AA@@A@AA@@A@AA@@AAA@AA@@AA@@AAAA@@AAAA@@AA@A@@AA@@AA@@AB@@ABABAB@@AB@@A@A@A@AA@@AA@A@A@A@A@A@A@A@@AA@AA@AA@@A@A@AB@@A@A@A@AA@@A@A@AA@@AA@@AA@A@@AA@AAA@@A@AA@@A@AA@@AA@@A@A@A@A@A@A@AA@@AAAAA@AA@@AAA@AA@@A@A@AAA@A@A@A@A@A@A@AA@@A@AAA@A@C@AAC@A@A@A@E@A@A@AB@@A@AB@@AB@@AB@@AB@B@DABAB@B@@AB@@AB@@AB@B@@AB@@AB@BABABADCB@@AB@B@B@B@B@B@@BB@BBBBBBBB@BB@@BB@BBB@B@@AB@B@B@B@@AB@B@@AB@@AJAHE@ICEUCUGOIMGMMKKMESQWMSQUQQIQI[QOSOUCK@EJGPOBQ@MFGDELENCFAFOSSmQUQu{KMsoyqMIoqMKaYi[]Wc__aY]iqcgmigkacYeE]Dm@C{GsMMII[OqEkGqEYUQiUaQgYaIyEOCAeAsEOAEGOAGIiAsESEQESKmImA]BoHSDgLqNPqJwFqEkG[C]GMYFaJSJ\\bcTaJe@Eg@qEgIC@]KmM_MyOMSCgE}AAgEKqMgIUMM[AD\\FdFb@D@^ERHHDFJN@V@PSXSXCbONCDMJKT@TIPQH[DSLOVK^CZAd@NBLJHHTAJGdBR@DJNLJ\\LHJFT@HNX@lLV^`NBR@PFNDHFCHADMJAZWhS`O`ObGRQfIVKTYdGHSLKLErGHID]IeGiCS@mLZLQ@IBQmQiMMES@WB[HaPkXOJS`IBK@Q@Q@OBOLO`KFSDWJENCVKPOPAPJPZT@FOLKJGPENDXNXNJPNRPVRd\\LREJRXDH@XAVHJHJAZEPCTCNKVY^MDM@uMYBWHOH@JFLLXFPJHTDbElDTBLZIVOV[PQDWAUMWGADAVALUTSAQLMNMBYJSFEJ@TDJ@DHV@B[JOP@ZELQHU@KGGAEDCLEHIFQB[RMDOHQFIHON[@KTQLYAU@ECAKBKFG@IKMIIM@KGCEEGKMEO@GACEKIIMOQKQFKDMLQJIFI@KAOCOGGKWKGAOAC@@ADCDGBGDKBC@EAECECEEEIEIEECA@@CBCBGBCBE@EBGDI@GBE@C@AACAACAAAECACCAEAA@CCCCCECECEACCACCECACACAGACCCEIA@A@A@C@EAcBU@KDIBUDUD]FIDSLOLUVWLWPQNEFFDDNDRHRFL@HKHQTOGYGKCIAODKDIAQ@KBQFKJ[LSJIHM@EDGNINILMLKLA@GLGJEDCJ@H@XCJGFEBGCGCIAGBG@KDGBKDMFKFIDQJULEFMFKFIFKBIAGAGIIKECGCSKOEKEOGOAWAIEIK_WEAGHGFGLIHMNWHSBSHC@kRIASKWOQESBK@QDCFINGFMFSBOBQ@QAUCMAIBGFERERCLINKHMHMJGJGJGHGJIHGDKAODEHG\\CFEBYCOCUCUAKCOAK@MBUDOLMHKBGFCHDbDTDLDFDHDDDHBFBF@FDTBHBJ@F@F@FBFFDBDFDDDBDBD@F@D@D@D@F@BBDLH@D@BBD@DBDDDBBBBBDBJBJ@D@BEFAB@DABABAFCBA@DF@B@BAD@FBBBBBD@DABADAB@BBDBBAB@DA@BBDBBBA@G@]@M@GBI@IAOCEAECCCEDEDE@MBIBCBAAAACKAAC@C@C@EAA@C@CDAFEFEHABBJFRBTGHKCYIULMTCPDLBPBVGT@RBNCRKLEPDLNHRHJFLHVDNLHP@NMTDTDXIVMXPFATGTGPINMLMLKDMDOAKCGHDR@RFPRTNHPFLJNHB@BBB@FBDBFBDXNLVJTJLRDBF@B@FAD@F@D@DBBBBB@B@H@B@BBDBBDBJFBB@B@BABAD@B@DBD@DADCLADADC@A@ABCB@D@B@DBDBDDHBFD@B@BBB@BFFFHFFEDCDCB@J@DADABJAHAD@BDBJBDBDDBDDFBB@DABBBBBDBBBBDB@BDFR@FADADCFCHCH@BBD@F@BEFEJILBPCH@BEFCH@D@B@DADEHCBCBABADAFADCD@B@DBDBDDD@BBBAH@FBDDHBH@D@BABABCBC@A@CBGBEBC@@BAB@B@H@L@DBDFFBBBD@D@D@D@H@DAJ@DB@DBBDDBBBDDBDDBD@H@DAD@BBB@BB@DBB@FABABAB@B@B@BBBB@FFBBBDB@BFBFADEHGJAD@LAD@DB@FBJDLBHDHJDDAFDHPJPJFRCRCTINKRMRCXBPFVDTBFFHFTNPTBXDPLJPLNLJLLFT@THTHLBPITLHRDNFLFNLDPCPFH@JDJDDBBF@BAFCFEHEFADCZEHCFE^_FCXSFGBCHEBCDIDCD@DAJEJAH@B@PFjPJFHBH@D@B@NID@B@H@LHD@FAD@DEJ@jTXBB@TB^PTLBDLCFKVBJHFJXFL\\DBPBJDB@FH@BFH@B@H@BDFDBHDHBJFDBFAHAB@BBBBBBDHFDJDJBDBLJNBPBXCTCB@DCPEBCFAHGLBL@^F^FbDdDdLHBRDZBZBVJ`FTJHNLP`B\\DZFZJbTPLXPNJVDTBDNCNCNFHR@TMNHHNLPJLRLPAPDTBLHRJPPFPHRPNJDXHNFNHPHRJLM~FNBxFNAPCVEHINORIREZDNEPIPIRETATHJLLLLPPJTFVFTFHJJNZBZHXJXNPHPTPNNHRBPIRKN@PDRNRAT@PHVCAQEYISHQFM"],"encodeOffsets":[[93831,30238]]}}],"UTF8Encoding":true});}));