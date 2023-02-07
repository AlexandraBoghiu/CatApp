# Cat Facts
😸

## Demo  
[Demo](https://drive.google.com/drive/u/0/folders/111nbOFs7ZJGPNrRycCIydWvzR3HTMbGl)

## Cerințe
- Sa aiba mai multe rute   **2p**

App.tsx
```javascript
        <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/register" element={<RegisterForm/>} />
            <Route element={<PrivateRoutes />}>
              <Route path="/home" element={<Home/>}/>
            </Route>
          </Routes>
```
- Sa se foloseasca componente reutilizabile **2p**

Componenta [Logo](https://github.com/AlexandraBoghiu/CatApp/blob/main/cat-app-frontend/src/components/Logo.tsx) este folosita in [Home](https://github.com/AlexandraBoghiu/CatApp/blob/main/cat-app-frontend/src/components/Home.tsx) si [FrontPage](https://github.com/AlexandraBoghiu/CatApp/blob/main/cat-app-frontend/src/components/FrontPage.tsx)  
- Sa se comunice intre componente  **2p**

Componenta [Home](https://github.com/AlexandraBoghiu/CatApp/blob/main/cat-app-frontend/src/components/Home.tsx) comunica cu [UserInfo](https://github.com/AlexandraBoghiu/CatApp/blob/main/cat-app-frontend/src/components/UserInfo.tsx)  
- Rute publice si private **1p** 

Ruta privata: ```/home``` care este accesata doar daca utilizatorul este autentificat, lucru ce se observa din [PrivateRoutes](https://github.com/AlexandraBoghiu/CatApp/blob/main/cat-app-frontend/src/components/PrivateRoutes.tsx)  
Ruta publica: cele de la primul punct  
- Sa fie cel putin o pagina cu un form (login/register)  **2p**

[RegisterForm](https://github.com/AlexandraBoghiu/CatApp/blob/main/cat-app-frontend/src/components/RegisterForm.tsx) si [LoginForm](https://github.com/AlexandraBoghiu/CatApp/blob/main/cat-app-frontend/src/components/LoginForm.tsx)
- Firebase sau orice alt mediu de backend  **1p**

Pentru [backend](https://github.com/AlexandraBoghiu/CatApp/tree/main/cat-app-backend) am utilizat Spring Boot
