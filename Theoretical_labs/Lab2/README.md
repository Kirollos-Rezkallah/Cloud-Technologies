## Theoretical Task 1.

### Question

> Апрель 2020 года, ваша команда выиграла дорогостоящий тендер на разработку системы
> пропусков во время карантина. Предложите сервисы в облаке, которые могло бы использовать такое приложение.
> Можно на конкретных примерах провайдеров (AWS, Azure, Google, Yandex, VK).

> April 2020, your team won an expensive tender for the development of the system
> passes during quarantine. Suggest services in the cloud that could use such an application.
> Possible on console devices (AWS, Azure, Google, Yandex, VK).

### Answer

Firstly, it's critical to recognize the pass system's basic elements:

-   A secured storage to keep pass data
-   Notification system for users
-   User-facing mobile and web applications
-   Monitoring on cloud resources
-   Mechanisms for user identification and authentication

We would use AWS services for this system's development because of its huge resource range and excellent resistance to failure. Let's now analyze every part of the system individually.

#### Storing pass data in secure storage

Performance is a crucial element of our system, considering the certainly high number of database queries. This requirement is fulfilled by the Amazon DynamoDB service, which offers a high-performance NoSQL database. It also includes a strong protection system and guarantees unrestricted backup performance.

#### User Notifications

We would use the Amazon Simple Notification Service, a platform that enables high-throughput notification sending, to notify users.

#### Mobile and web application for users

A single API is necessary for smooth communication between online and mobile applications and the database and other services. For this, Amazon API Gateway is an ideal solution since it can efficiently manage the complexity of receiving and processing several simultaneous API requests.

The Amazon ElastiCache for Redis service can be used to implement Redis data caching to improve application performance.

The implementation would use Amazon S3 to store static files.

#### Monitoring of cloud resources

This task is effectively performed by Amazon CloudWatch, which makes it possible to gather, view, and analyze metrics and logs from many other cloud services.

#### User identification and authentication

The challenge at hand would be solved successfully by using the Amazon Cognito service for user identification and authentication.
