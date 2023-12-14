package Proekt_45.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proekt_45.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Ученик
 */
@Entity(name = "IISProekt_45Ученик")
@Table(schema = "public", name = "Ученик")
public class Uchenik {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PrixodUxod")
    @Convert("PrixodUxod")
    @Column(name = "ПриходУход", length = 16, unique = true, nullable = false)
    private UUID _prixoduxodid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PrixodUxod", insertable = false, updatable = false)
    private PrixodUxod prixoduxod;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Prosmotr")
    @Convert("Prosmotr")
    @Column(name = "Просмотр", length = 16, unique = true, nullable = false)
    private UUID _prosmotrid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Prosmotr", insertable = false, updatable = false)
    private Prosmotr prosmotr;


    public Uchenik() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}