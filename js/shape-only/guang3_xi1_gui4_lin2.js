(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('桂林', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"桂林"},"geometry":{"type":"MultiPolygon","coordinates":[["@@AB@D@B@BA@A@A@@B@BBBADBBABB@@B@BBBB@@BA@@B@BABABBBB@B@BDB@BB@B@B@B@B@BA@A@ABBBBBA@@B@B@B@BB@@BB@B@@BBB@BD@B@ABB@@B@BBBBB@B@BB@BD@B@BBB@BB@@B@BAB@BA@AB@BA@@BA@BD@BA@BB@B@B@BBAB@B@B@@B@BB@B@B@BBBB@BBDC@@BB@AB@BABAB@B@DAB@BB@B@@BB@ADAFADAH@BAB@B@BAB@B@DABC@ABAAA@A@C@ABC@@BA@CBA@AFA@@BA@A@A@CBA@@B@BA@A@ABABA@@AA@@BA@@BA@A@A@A@ABBB@BA@@B@BBB@B@B@BB@@B@BB@@BB@@BB@ABAB@BA@@B@B@B@B@B@DB@@B@B@B@BABA@@BA@BBA@ABBBA@@BDD@BB@B@BB@BB@@BB@@BB@@B@B@BBBD@BB@BB@@BB@BB@BBBB@@B@BBBABB@@BB@@BBBBB@BB@@B@BB@BB@BB@@BDBBAB@B@B@B@BBF@B@B@@BD@BAB@BB@AB@BB@BDFBBBBABA@BBBD@F@BBFBBBB@BAB@BBBB@@BBBD@B@BB@BB@DBB@BAB@BDADBB@DDDBBB@B@BBB@BBBBDD@B@BA@@BA@@BABA@ABA@@B@BADABADA@AACB@BE@AB@BB@@BBDABA@A@AAA@A@ABA@C@CBA@ABEDAF@BBBBBAB@BADA@@B@BA@BBBB@BBBB@B@@BBBB@@B@B@BBB@B@B@B@B@BBB@BBB@BDBBB@BA@@BBBB@BB@B@BB@B@B@B@BB@D@B@B@B@B@DB@BB@B@BBB@BB@@B@B@BAAC@ABA@A@A@@BB@@B@B@BA@ABBB@BA@A@ABEBID@DCBCDCBAB@HBD@D@DBBAD@BA@@BABCB@B@B@BA@A@AB@BE@CBAB@HAB@D@B@D@BAB@BCBA@C@@AEAABC@CBA@A@EDABA@A@CBCB@B@BEBCDC@CBE@CDEBA@@B@B@B@B@BA@BDB@@BB@BBA@@BAB@BB@BB@B@B@B@BBB@B@BBD@BB@AB@B@BBB@BAB@B@DBB@BBFBB@B@BBB@DBBBB@BBB@B@B@B@B@BA@BBDFBBB@BBD@BBB@BBBBBBB@DDBBDBB@@BDBBB@BB@AD@BB@@BBBB@BBB@B@B@B@BADAD@JGJILBFBRHD@NFJFDDBHDPJTDFDHBHBJCNENEJEFABINAJCH@LADBJ@FAF@BIFKFEBC@KJCF@F@LFJFJFTLRBFHLHFFDLBHAB@LGPGNEF@JAPCPDJFBBBDHPFRDJBDDR@J@JDHDHDJFDHFD@DDBF@LAJDRDPBJ@BBHDR@BJJFJJDLFLDLJDBHFBDNLFH@BHHFHFDFFHAFIHIHEHCH@B@J@DBB@DDJDBBL@FAD@BABCDCDCBCJKBEBABAFAFAFAD@DDHFHDN@JAL@L@BBD@D@DDD@F@JAH@DAD@@ACEACAGAC@G@G@EBCBEDE@CBCBA@ABAB@@A@AAC@AAB@BA@A@CC@A@A@AAACC@A@A@A@AAAAA@ACCAA@A@A@AAAACAA@ACACEAA@A@AB@B@@A@AA@CA@A@AACCCAC@CAA@GAQCMIMCK@ABEBCBCJENAHAJEHKDIBEFEFBHHHNHHF@FAB@TIJGBAJGHADAB@B@B@B@B@B@BBB@B@DABBDDLFFJDLBHBDBH@BHPJNHHJHL@HCHGDGBKDKFELGB@LEJCHCLGB@JMDKDIDO@C@IEKAOAIAE@MFEJEDAD@D@B@B@NBLBPDFBFBBAHAD@B@B@B@BB@BABBB@BB@BA@AB@B@BD@B@B@BBABAAA@A@ABAB@B@B@BDBBF@PFJFHJDFDFDLDNDHBJHJDLFNFJ@DDHFFBF@HEFCJFJHFFDFHFFBFDDDF@H@NHJJLLJJJNNNHBBNHRP@BHHHLFJHJHFHBHFNHLHDFHHFFFDH@HGDKFEHCHBLFFFHHJJJJ@BFJHH@BFJHPDDHJHFDDFPBJBLAR@RDJBD@JDJBJBJDFJBJBJBFDFDFBLFBHDJHJHPLJJJNJJ@FADEDMBMJEJERCNDRFPJLAPCRELCDAJIDIFIHEF@NFHLJNFJHBJBHGHQBOEGIKIIKK@GJGJGBAJGJGFCLANBPFNHLBR@P@DBPAHAJAJ@L@D@JBJFHFLJD@NBXBZDJDLBVBH@D@@ABGDEJIBAACCEAA@AHAD@D@BB@DADBJDJFNDJDHBD@FABEF@BABDD@FAD@FCDCBAHCFCFCB@BBBD@VDHDBDFZBD@F@L@FBDBBBBAFALCHCD@DDDDFLDHDLBH@BBFBB@B@D@BADEBAFABA@C@E@CDCFEFEJCXEACIOAG@C@ABCBAJCD@H@HBJ@FADABADCBADAHBFBD@BAAGCG@A@A@AB@B@DBB@B@DADABAB@B@B@BBBDBBDBDBB@BA@C@CBABAB@FBB@@ABCBAB@B@BBBBBBB@DABAFCFEDCDCDAFAD@D@BADAB@B@D@B@B@@DBBBBB@B@D@BBD@B@D@DADBD@B@D@HADADAD@D@B@FBJ@R@DBNDD@B@D@DAB@BAFAD@D@J@FAFBN@FBD@DAB@BABC@CAG@C@ABCAECGCEAEACDCHGHGB@FCB@D@DFBBB@B@BC@EBC@CDAB@DBB@HHDBB@D@HCFCD@BBBF@BBBPDF@FDD@D@HAH@D@DA@CBEDEDCBCBABCFE@A@CAKBCDABA@E@EAEAC@CBCAC@CCAEAOCEAE@E@CAACACBC@A@CDE@C@CA@@AEAACAEBA@CFCBCBAB@B@BA@AB@ACA@CCACAEBE@CACCCEEEG@C@A@AA@ACAC@EBEDKBE@ADCBAFCBC@E@IDCAEAA@A@C@A@A@A@A@CECIECCAC@A@AB@FDDBD@B@AA@CCCEAECMIEGGIBCBAHEBA@CBALGDAFAB@BABABABAAA@AA@C@G@C@ABG@A@AEAAAAGCE@C@CAC@ACCA@CAA@GAEACECEGAAAECACAEACA@AAA@ABCBA@A@CCCCCAA@ABABA@A@C@AAACGAEAEAA@A@E@A@CCE@ACCCAECACAG@I@CEGCEA@@ADALBJDB@BCBEAIBGBAJCH@D@DADA@AACEEAABEFEBAB@LIFADIAAC@G@CAACA@BCBEFEDCLGBABAJEBADEDE@A@KBGBEBCDCB@PGH@B@HAB@R@B@HEHCDAB@B@FLBFBJBNBFDDJH@BTJDDBBJDFBB@@FBDBDFBJDJDF@B@B@LSBCDEDADAD@BBBB@BBHBDBDDDHDHBB@B@BA@ABAAE@E@C@AHEDC@ABAAAACAA@AB@D@LBXDHBDAHKFED@DDLLHDFBJCH@N@HBFDD@FABCACGGAC@IDCF@HDHDHBXGPCBAAEIME@CACAEAGBG@EAECKKOA_ACC@ACCCKCQ@EDCLEDEBCBMBQBIBIBIBK@KCCECGAI@GDOAKKKSIOCAMEOCMACCCACAE@CBC@A@SEKCIAG@EBCBEDE@IAGCGMGCCAAA@AACBQ@CBQ@IDEFK@IAKE]AI@CBI@ADILQHGBALGLGJKFIBE@CEGGECOAAGWGQAEAO@I@CBGDIBEBK@GAIBCA@EYAA@A@A@AA@@AA@@A@AB@@AACA@@A@AB@AAA@A@A@@AA@@A@ABA@AA@@AA@@A@AA@@BA@CGIICECGCEAG@IDG@CAIACGIGOGGCAG@CAACAIAAA@IFE@E@CAAA@IIOAE@K@I@AKCGCKGACACACCGCAMCSKKICAA@GBSBUDA@A@AAEGACIGCECE@C@C@AAAIEAC@AM]EGIKSWGEWKCCACA@A@EBA@CAQK@GN]BG@GAG@CNUBC@G@EEECG@EBEAEAAEEKCOCEACCGCECGACAACGGECAEACA@AAOBE@GACEAGAACAA@IBI@ECGC[KWGCECA@ABGDE@CACCCE@ACCEMU@AACACAA@C@CBA@AAEGIAA@EBCHCBC@AEIAAMKKMKK@ABAFAB@@CCEEGAAGKEKAKAG@CHQ@ADMACAE@C@ADKBCBKBC\\WBA@ABCAICEGEAABA@ADEDANAHAD@FEFE@A@A@CEKCO@GBIB@@A@AB@H@B@BAAAEKK@A@A@EGCG@A@AB@D@B@DDJFBFDBBBBBFDB@BAHIH@D@HBBBFJBDJBPBB@DAJCNAJ@JFNFTFL@HDJDDBHAH@BCAA@A@AB@BEB@@ABC@AFEBA@A@CBABC@ABEB@DCBEB@B@BABA@AB@BC@A@CBA@AFED@BAB@FCB@BAB@FBB@BB@AB@D@DBBBBBBBBBBB@BB@@DB@B@FDHCFAD@JDLABAAAAAAA@ABA@ABA@A@ABA@A@ABA@A@ABA@ABA@ABAB@@ABA@A@ABAA@@A@AB@@A@AAAAAB@@AAA@A@AAAAABA@AAAB@@A@A@A@AAAAA@AA@@A@A@AA@@A@A@AA@@ABAEAA@AA@A@CA@@AAA@A@AA@@A@AAABA@A@A@A@AA@@A@ABAA@@AB@@AA@@A@A@ADEBCDCBCBABADB@E@A@CBADE@EBG@AAA@AA@@AAAACBA@C@EA@BABA@AB@@AAEBCBABA@A@AACCAA@A@CAEBCBIDC@ABA@AC@ACA@A@CAA@C@AA@CCCE@CECAACA@EAA@CA@BAAA@AACAGKE@AAA@AA@BCGDCBCCCBABAAA@GBCACCE@A@CAACAC@EBA@ABCDABCAEDCAIC@A@A@CBCAEAC@CBA@ABCB@AA@@AA@BA@AA@A@@A@AAA@CA@@A@AA@@A@AA@AAA@A@AAA@A@@AAA@AA@@AA@@ABAB@@A@AA@CCA@@CE@@AAAAA@AA@A@A@AAA@AAC@CACCA@A@A@@BA@A@@DGBCBA@A@ECCBA@A@CCE@A@AAACAA@AAAAAAABABEB@@AA@AA@ACCBA@CG@AC@E@AAACCBE@AA@CAA@EB@GAE@A@CCAAAA@A@AAEBA@A@CAA@GB@A@A@A@ABAACBABA@A@AAA@A@C@A@AB@B@@AB@B@@AB@B@B@DABB@AB@BBBAB@B@B@@A@AB@BA@AAA@AA@@ACAA@@AAA@AA@@AA@@AAA@AA@A@CBA@@A@AA@AAA@@AA@@AA@AA@A@A@AB@AA@AA@ECA@CA@A@C@CACFABCFAAE@ADADABEDACA@ABC@CD@B@B@DAFABAHABBFABA@ADAFCB@@ACA@A@A@ABAAA@CA@@ABA@A@A@ABAAABABA@A@ABA@AAAB@ACB@DABA@ABAB@@AD@@CB@D@D@@AD@DEB@BA@AAAA@@AB@B@@A@AD@BAB@BABE@A@AB@@ABAB@@AD@B@@AB@@CACAAC@C@AAABCDA@AABC@ACA@A@AA@A@A@@BA@E@@AA@BA@CCABABAD@BC@CB@DAB@B@@C@A@CBA@ABCBAF@@CAAC@BC@AE@A@BABCDCAA@ABA@AAAC@AB@BG@@AAA@AAAA@C@AAA@ABADC@A@@AC@@AAA@AAAA@@A@AAC@A@A@ABABAAABAAAB@DBB@@ABA@A@C@A@AAADA@AB@@AAAAAAACC@AAAAAA@@AAAA@@A@AAAAAAAAAA@@ACAAAAA@A@AAAE@AACA@CAAAABAAA@A@AAAAA@A@ABAAA@A@AA@@CAA@A@A@AACAAA@A@A@A@@AB@ACC@AAEAGBGDC@GFCA@ACAA@CA@ABCFAB@BCBABABAB@@ABAFAF@BABBFAD@@ABADCB@HAB@FAH@B@B@BABBDAB@D@B@BB@AB@B@D@B@BB@AB@BAB@BAB@@A@ABA@BB@BC@AB@AA@AA@@A@A@CBCBA@AAA@A@CAAABAAAAA@A@C@ABA@A@@AAAA@@A@A@AAC@A@C@AA@@A@AA@@AAA@CAAAB@CC@@CACC@ABCAA@AAABA@C@A@@AA@@AA@CAAAAACC@AA@AAA@@A@AA@AAA@@A@AAAA@A@A@@BCBAACBAAA@A@@BA@ABA@@BA@AB@AA@A@@B@DABBBADAB@B@B@B@BBB@BBB@B@B@BA@@B@DA@@B@BA@@B@BA@@BAB@DABA@@B@BA@@BB@@B@BA@CBA@A@@BABA@AB@BA@@A@A@A@AAA@AABA@AAA@@A@ACC@AAAAAAA@ACCAA@CA@@ABA@A@AB@BA@A@A@A@AA@C@@BA@@AC@A@AAAB@AA@A@ABC@A@@AA@AABAB@@A@AB@DAB@DA@AAACAA@AAA@A@A@A@C@A@CA@ACEBAAABA@A@A@A@AAAAACA@A@AACA@@AA@A@@AB@ACA@@AA@@AAC@AA@A@AA@AA@@CEAA@@A@ACABAA@AAA@AAAA@BA@@DA@@B@BABAF@DA@@B@FABBBBDBDAB@BA@ABBBABBD@B@B@BDB@BA@@BA@@BA@CBA@@BAB@B@B@B@D@B@B@B@B@BABBB@BB@BB@BB@@B@BA@A@@BA@A@ABA@AD@BADA@A@A@ABABABC@@BAAA@@BA@@B@B@B@BA@AB@B@BB@B@ABABA@@BB@B@@BB@@AB@@B@B@B@B@B@B@BA@BBABBBABB@B@@BA@@B@BCB@BA@A@@BB@@BBBBBA@A@@BABB@@BBB@BB@BAB@B@@B@BA@AB@B@BA@@BB@BBD@@B@BABAA@BC@ABA@AB@B@B@B@B@BB@B@B@@BA@@BA@@BABAB@D@D@B@BCDA@ABA@@BAFA@A@A@AAAAA@@BABAB@BA@@BABAAA@AAAA@A@AA@ABAA@BC@@AA@A@A@A@@AA@A@@AA@A@@AAAA@A@A@@AA@AAA@A@A@A@A@@AA@@AAA@AAAA@@A@AAAA@AAA@@AAA@A@AAA@A@AAA@AA@ABAA@A@AA@@AAA@AB@@AA@AAAAA@A@@AAAAAA@@A@ABABA@AA@@A@AAABACABADEBABA@AAABABA@C@AAA@ABA@AB@@ABA@C@ABABA@AA@A@A@AAAAA@A@@AA@A@AAA@@AA@AAA@@AAAA@ABA@CBC@A@A@ABA@A@A@ABABA@ABADAA@BA@@B@B@B@DABAB@BG@A@A@E@E@A@C@CAA@A@A@CAACBA@AFABAAACBA@A@CDA@C@ABA@ABC@ABE@@BABA@ABA@AB@BABA@CBA@ABBB@B@BABC@@BAAA@@AA@A@ABA@A@ABABC@@BA@A@AAABAAA@@BCBA@AB@AAAA@EBA@ABCACB@BADCB@BABA@@BED@B@DABCAC@AAC@CBEBC@C@ABAB@DABA@ABCBEBCD@DADABCFCHAB@D@DAB@DADCBA@CDCBABGBA@ABCBA@A@CBABCBA@ACE@@CCB@ACBA@A@C@A@@A@ACBADA@A@CBA@A@CABA@A@CAAAE@ABAACC@@C@A@AAAAAB@@ABA@CAAACAAA@@A@A@ADCA@ABAAAAA@@A@AA@A@CAABCAA@AAGBE@EHEAA@GBCJCF@BAFBABHDBABBDAJEDBB@D@D@FBD@HCACBAAABACA@GACAC@AABG@ABCA@CBA@AICA@ACABA@CAACAAAEC@AACCC@AA@AA@A@A@CD@AEACCBCBCACAAAA@A@A@@CBABA@CACCA@ACEB@BAAABA@AC@@CCBAACDA@ACCB@BIBCBA@@HC@ABC@CFDFCDC@C@ABA@CAA@A@A@@A@AAAB@@AAAAAAAAA@AA@@AA@BA@A@ABABCB@BABB@BBB@B@BB@@AB@BA@AB@B@B@@ABA@CB@@A@ABABAA@@A@ACAA@A@C@ABEAC@C@BEBABABABA@A@A@CA@AAA@@A@A@AA@C@@BAAABAA@AAABA@C@AA@A@AAABA@C@A@@BA@@BA@@B@BA@A@@BA@@BCBABB@BA@BAB@B@BA@@BB@@BA@@BB@EBABA@A@A@@BA@A@A@@BA@@A@AA@@BA@A@A@@BA@@B@B@BAAA@@B@BBB@BCBABAAABA@A@A@A@AAB@@ECAA@C@ACA@A@AAAA@CA@AACCC@AC@A@AGBDBEAC@ABCBA@@BABBBA@ABAA@DC@AACAAAA@EAAAABABAAC@ACA@AAABC@ADACCAA@@A@AAA@EG@A@@AC@@BBBB@@DCAA@A@A@AB@BA@ACB@ACAABA@AC@AAA@EAA@AA@AA@@AAABAACACCAAAC@ACA@AAAAACBAAAAAAAAAA@@A@AB@BA@AAAAA@ABAB@@AB@@AA@@AAA@A@AAAA@@BA@A@@BA@BBABBBA@ABAB@BA@BB@BABAA@DBDABBD@BABBBABC@@DAAA@CAC@@B@B@BC@ABAAA@C@ABA@A@ABA@BAAAA@A@@BC@C@AAA@C@ABA@@BA@@BCACBABA@A@ADAFACAB@CEBCEAAA@@B@DBBBF@D@DAD@BBF@BBBABAACBA@C@ABCAA@ABBD@DDBGB@DA@@BBB@BBB@B@B@B@BA@@BABBBB@B@BAD@D@@B@B@BB@B@CBBDDB@DB@CB@DC@BBBF@D@B@DBBE@AC@AABE@A@CCEBACABAA@CCACAC@@BE@A@E@CAA@A@A@BABAA@A@@AA@AB@BAB@D@D@BD@BABBB@DA@BBBC@EDABA@CDCADC@C@CA@A@CDAAAC@AAAA@AABCCEAA@CA@CBA@ABA@EHEAA@@AAAA@C@AAA@A@@A@AAFB@ABBBA@ABABB@ABBBBBA@BBA@@BB@BBCBDBB@@B@BBB@D@B@B@DCB@BC@A@ABCBAAA@C@@B@BBBAD@BDBABABEDB@B@B@B@BBBAB@DB@DBBBB@DBBDADFB@BDBB@BBBB@BD@BB@ABADABC@A@AAC@CBAC@BA@A@CBA@A@A@A@BFBBBBB@DBBBB@D@BDDBB@@BADADABCAA@ABBBAB@D@B@B@B@DAB@BB@ABDB@B@B@DBBABBB@DDBDBB@BB@DABBD@DCACAAAGAA@C@C@E@@BC@@ACAA@A@@AAA@ACAE@@ACAA@ACC@AAE@ABCB@BABCB@B@DCAABCAA@@AA@A@@CCAAA@A@AAA@ACABBA@@B@BB@@BAB@BC@ABA@ABA@C@CB@DA@@BA@@BA@ABA@@DA@AAA@CB@AC@ABE@C@ABB@BBADA@AD@DA@@B@F@BB@DDB@B@@B@BB@B@@B@BBABBBA@BB@@BB@@B@BB@B@@BBBBD@BBB@B@BA@BB@B@BAB@B@BAB@B@B@B@B@BB@@BB@@BDB@BB@@BA@@BA@@BABAB@BBBB@@B@BB@B@@BAB@BAFBABB@B@BB@BBA@@B@BB@@B@DA@AD@BA@A@A@A@@BD@@BA@AB@B@BDBB@DAB@D@CBF@B@B@@BC@@DDBB@@B@BF@BAD@DBB@BDBDB@B@D@BDB@D@@BDB@DBBD@@BB@BFB@DD@D@BAB@D@BA@CBBBBBAF@BC@@BA@AB@B@BABABDH@BA@AD@DAB@B@D@B@DBBBDAB@BBDA@BDEB@DAB@DA@ADCD@BBB@BD@CF@DB@@DAB@B@BEBCB@F@DBFDBFBH@DCJDDDF@BBB@@BBDABBDA@ABDBA@ABAB@B@B@B@BADA@AD@BABG@AAA@@AAA@AC@A@@AA@@A@AE@A@CAA@ABAB@BA@@B@BAAA@@BABGAA@@AAB@BA@@BABABB@@BA@@BC@@AA@@B@BA@AAAC@A@A@AAAA@A@A@@BAB@BAB@BABA@A@A@AAAA@BA@BB@BA@ABABA@A@ABA@A@ABABAA@ACC@AC@A@AA@BAAA@AAA@@CA@@AA@A@A@AB@BA@AAAAA@@BAB@B@B@BB@@BBDA@ABC@A@A@@B@BA@ABBB@BBB@BA@A@@BA@A@A@A@ABAB@BB@@BABB@AB@BB@@BA@@BABA@@BA@@AA@A@@BA@@BB@@BBAB@@BAB@B@BA@AA@BA@AAA@@BABABA@@B@B@BC@A@A@A@@AB@AAA@@AA@A@@ADAAA@AA@@AAA@AB@AAA@@A@A@AA@@AA@A@ABEB@BA@AB@AAB@A@AAE@AAC@AA@ABA@AAA@A@AAA@EAAAAAACABC@AAA@E@@BA@@BA@ABAD@BBB@D@BADAB@BABCBA@ABA@A@C@A@AAA@AAA@@AAAABA@ABC@A@CDA@A@A@@B@BC@A@A@A@@B@B@BA@BBAB@B@DABAB@B@B@D@B@BB@@BAB@BAB@BDDDB@BAB@DABA@@B@BABCBAAA@A@A@AAA@A@C@A@@AB@B@DC@A@C@AA@@A@A@AA@AA@BAAA@@BAB@AA@A@@BABA@AA@AC@A@AAA@@BA@@AABA@ABABABB@BB@DBBA@BDAB@BA@ABABCBA@ADBF@BA@ABA@C@C@CAC@A@A@A@@B@B@BBDA@BD@DBB@B@B@B@B@DB@@BB@@BABBD@BB@B@@DBB@BAD@DB@B@D@@B@BB@@B@BA@@BBB@B@B@BA@@B@B@B@B@B@BABBBABA@A@ADADA@@BAB@BA@AB@BBB@B@B@B@B@BA@A@@AA@@A@AA@CAA@@AA@BA@AA@A@AAAAA@@A@A@AB@BA@AA@@AB@@CA@A@A@AB@AA@A@@AAA@BA@ABC@A@A@ABG@AAA@@AA@AAAAACAAA@@BC@CB@BA@@B@B@BBB@BABA@@BAAA@@AA@A@@B@BAA@B@BA@A@@BAAA@A@@B@F@BADA@@BBB@DBDA@@BA@A@@BB@B@@BA@@BBBB@B@@BB@@BB@BBBBBBABB@@BA@A@ABABADBB@BA@@D@BAB@B@B@B@B@B@BA@@D@BC@A@A@A@@BA@A@@BAA@BA@@AA@ABAB@BA@A@@ACB@A@A@AA@A@@AA@@AA@AB@AA@@AA@AB@A@AA@@AA@@BA@@BA@AAA@A@A@A@A@AAA@CB@BA@ABAB@BAB@BAB@BA@ABA@@BC@ADC@@B@B@B@B@D@B@B@B@BA@@B@BA@@ACA@AA@A@A@@BA@@CAA@BA@A@A@ABA@A@@CC@AAA@ABA@A@ADC@@C@AAC@AA@@A@A@EA@@AAA@AEA@ACBCBC@@BA@A@@BA@ABA@A@A@ABB@AB@BE@A@A@A@C@A@A@C@A@ABA@@AA@@BAA@BABAAA@A@A@@BAAC@@AA@@AA@A@A@ABAA@BA@CBAB@BAB@DA@A@A@@A@A@AAAABABAAAAA@A@A@@BBBA@A@CDA@A@A@ABAAAAABA@ABA@A@BB@B@DA@A@ABBFBBAB@DA@A@C@A@BECCABAAC@CBC@A@A@@BCB@AA@@B@B@BABD@@BBBB@@BA@C@A@A@C@C@C@ABABABABCDAB@AA@A@@AA@A@ABA@AACAA@AB@B@BC@@BC@A@C@C@A@A@E@@BC@A@A@A@A@ABA@@BCFA@A@CAC@E@@C@A@ADAB@@AB@DABA@C@A@AAA@AAA@C@A@AA@AAAA@AAAA@A@@BABABA@ABGBAAA@C@C@A@AA@AC@@AACA@@AA@AB@BA@A@ABABA@A@A@@AA@A@ABA@CAABAB@BB@B@@B@BB@ABBDA@A@@B@BDBAB@BAB@D@BB@D@@D@B@B@DADBBD@@DBDB@DBBB@BCD@BICCDDFBDB@BBDBBDDB@BABCFGAAD@B@BB@B@BAB@BBB@BBBB@BAD@BA@@BAL@F@H@BABB@@BABB@B@@B@B@BA@A@A@@B@BABABC@A@@B@BABB@BDA@C@@BBBAB@B@BBD@BAB@DABBDBBD@BB@BB@B@@AB@@A@AF@@BB@@BB@BAB@@DA@AD@B@B@BA@A@@AA@@BA@@B@BA@A@C@@BA@A@@DBB@BB@@BABBB@B@B@BAAABCDABABADDF@BB@BB@BA@AD@B@BBB@B@BBD@B@BBB@BB@B@B@BA@B@DB@@ABCB@@BBDBBB@@AD@B@BB@BA@@B@BABBB@BBB@AB@DADAB@@ABABADAF@BBB@B@@BB@@BBB@BA@CBA@ABA@A@A@A@BD@BB@@BAB@BB@BBB@BB@BBB@BA@A@AB@BAB@B@B@B@D@F@B@B@B@B@B@B@BBB@BA@A@A@C@CA@AA@C@A@@B@BBB@BB@@BA@@BBB@AB@@B@BBBA@@BABB@@BB@B@@B@BB@BBBBB@BBB@B@@B@D@BAB@B@BA@BBA@@B@BBBB@@B@BB@@B@BB@@B@D@D@B@B@B@BBB@B@B@BBB@BABBB@BADBBB@B@@BBBBB@BB@B@@BB@BB@B@BA@DB@BB@@B@B@D@B@D@B@B@B@B@B@BBB@B@BABA@@B@BABAB@BABABA@@BA@CBA@AB@BAB@BA@ADABAB@BAB@BABC@AB@B@B@BABAB@B@BBFDBBB@BB@@B@BB@@B@BB@@BB@@BBBB@@BBBB@@B@B@BA@@B@B@B@D@BBBBD@B@B@BA@AB@D@BAB@BABBBA@EDBB@BDD@BBBBBDB@DB@DAB@B@BAD@@AD@BBB@BBBBB@B@B@B@B@B@BB@BBA@BBB@ADBBBBBB@ABBBBBB@@BBBB@@BBBB@@BB@BBBB@DBBB@B@BDB@BB@BBB@B@BDB@BDD@B@BBB@BB@@BD@BBB@@BB@BBB@BFBBBBABB@@BBBB@B@@BDBBBA@@D@BBDBB@BBFA@BB@B@B@B@BBDA@ABA@ADBB@BBB@BB@@A@AB@BBBB@B@B@DB@BBB@@BBB@B@BBB@B@BB@@BBBABB@@BBB@BBBB@BBB@@B@BABB@@BB@BFBB@BBBABBB@BB@BBB@AD@B@B@BBB@BBB@B@DBBBB@ABBB@BB@BBBBBB@@B@B@BAB@B@B@B@B@BB@B@@B@BB@@BB@@B@B@BAB@B@B@BA@A@AB@BBB@BA@BB@B@B@B@BB@@B@B@B@BBDAB@B@B@B@BABB@@D@BB@@BB@@BBB@B@B@B@BC@@BCB@B@B@BA@@BABBDCD@DB@BFB@@B@B@BAFBBBBCBBDB@@BABBBBA@BABA@A@BBBBABAB@B@BBBB@@BD@B@B@B@B@B@@CAADABA@AB@B@D@B@ADA@A@BB@BBBABB@@BB@@B@BA@A@A@A@A@A@@BB@B@CDA@ABA@@BA@A@@BABBB@BBB@BB@@AB@@B@BB@@BB@@DB@@ADBABBB@BB@BBB@@B@BAB@B@BA@@B@BB@@BBBB@BBB@@BAB@DAB@B@B@BABABA@A@ABA@@BA@A@@BA@A@@BBB@ABBBBB@BADBB@B@BBBAB@@DBD@B@B@B@BA@"],["@@BBBA@AA@@BA@"],["@@CA@BBBBA"],["@@BAA@A@BB"],["@@@AA@A@A@AAA@AB@B@B@B@BB@BBB@BA@A@AB@@AB@"],["@@@BB@AA"]],"encodeOffsets":[[[112401,26047]],[[112699,25264]],[[112525,25371]],[[112510,25408]],[[112389,26036]],[[112385,26040]]]}}],"UTF8Encoding":true});}));