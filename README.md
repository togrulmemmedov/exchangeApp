# exchangeApp
 #### Açıq API-dən aktual məlumatları əldə edərək onlayn valyuta çeviricisi 
 ##### Valyuta məzənnəsi haqqında məlumat əldə etmək üçün URL-ə bu valyutaların iki abreviaturasını əlavə edərək (boşluq və ayırıcılar olmadan) valyuta cütü haqqında məlumat sorğulamayir. USD və RUB cütü üçün nümunə:
 - https://api.exchangerate.host/latest?base=USD&symbols=RUB 
##### Cavab JSON obyekti olaraq qayıdır. Bu obyektin rates dəyişənində key-value cütləri şəklində obyekt var. 
##### Kalkulyatorun idarəetmə elementlərindən istifadə edərək istifadəçi iki valyuta və konvertasiya ediləcək məbləği seçmək imkanı əldə edir. Seçdikdən sonra kalkulyator çarpaz kursu və yekun məbləği göstərir.
##### İnterfeys
- https://www.figma.com/file/jprZt6p7xO6T7oj85woJyi/Converter-m4-part-time?node-id=59%3A0
###### Funksiyalar:
- ```Update()``` verilen API-dan funksiyaya gonderilen melumatlara uygun datani cekir.
- ```Function(event)``` update funksiyasin cagirir ve uygyn html elementlerine deyisiklikleri elave edir.

