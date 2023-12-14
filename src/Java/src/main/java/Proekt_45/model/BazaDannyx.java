package Proekt_45.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proekt_45.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: БазаДанных
 */
@Entity(name = "IISProekt_45БазаДанных")
@Table(schema = "public", name = "БазаДанных")
public class BazaDannyx {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SpravUch")
    @Convert("SpravUch")
    @Column(name = "СправУч", length = 16, unique = true, nullable = false)
    private UUID _spravuchid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SpravUch", insertable = false, updatable = false)
    private SpravUch spravuch;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "KartDostup")
    @Convert("KartDostup")
    @Column(name = "КартДоступ", length = 16, unique = true, nullable = false)
    private UUID _kartdostupid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "KartDostup", insertable = false, updatable = false)
    private KartDostup kartdostup;


    public BazaDannyx() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}